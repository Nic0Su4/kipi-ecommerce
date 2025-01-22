import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signup } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Registrarse</CardTitle>
          <CardDescription>
            Ingresa tu nombre, email y contraseña para crear una cuenta
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form id="login-form" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Nombre</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Ingresa tu email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                minLength={6}
                name="password"
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div className="grid gap-2 mb-3">
              <Label htmlFor="password">Celular</Label>
              <Input
                minLength={9}
                name="phone"
                id="phone"
                type="tel"
                placeholder="Ingresa tu número de celular"
                required
              />
            </div>
            {searchParams.error && (
              <div className="text-sm font-medium text-destructive">
                {searchParams.error}
              </div>
            )}
            <Button type="submit" formAction={signup} className="w-full">
              Registrarse
            </Button>
            <div className="mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              o
            </div>
            <p className="text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-primary font-bold underline">
                Inicia sesión
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
