/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as yup from "yup";
import { createClient } from "@/utils/supabase/server";

const signupSchema = yup.object({
  email: yup
    .string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  name: yup.string().required("El nombre es obligatorio"),
  phone: yup
    .string()
    .required("El teléfono es obligatorio")
    .min(9, "El teléfono debe tener al menos 9 caracteres"),
});

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
  };

  try {
    await signupSchema.validate(data);
  } catch (error: any) {
    const errorMessage = encodeURIComponent(error.message);
    redirect(`/signup?error=${errorMessage}`);
  }

  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (error) {
    redirect("/signup?error=Error al crear la cuenta");
  }

  const userId = authData?.user?.id;
  if (!userId) {
    redirect("/signup?error=No se pudo obtener el UID del usuario");
  }

  const { error: errorInsert } = await supabase.from("usuarios").insert([
    {
      uid: userId,
      nombre: data.name,
      correo_electronico: data.email,
      telefono: data.phone,
      rol: "user",
    },
  ]);

  if (errorInsert) {
    redirect("/signup?error=Error al crear la cuenta");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
