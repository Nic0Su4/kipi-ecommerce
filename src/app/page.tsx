import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-left">Bienvenido a Kipi</h1>
      <h2 className="text-xl font-medium mb-8 text-left">
        ¿Qué piensas comprar hoy?
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-4xl">
                  {category.icon}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">{category.name}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
