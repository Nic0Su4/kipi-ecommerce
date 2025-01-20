import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stores = [
  { id: 1, name: "Tienda 1", description: "Descripción de la tienda 1" },
  { id: 2, name: "Tienda 2", description: "Descripción de la tienda 2" },
  { id: 3, name: "Tienda 3", description: "Descripción de la tienda 3" },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tiendas en {params.slug}</h1>
      <div className="grid grid-cols-1 gap-4">
        {stores.map((store) => (
          <Link key={store.id} href={`/store/${store.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{store.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{store.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
