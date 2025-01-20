"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/products/data/products";

export default function StorePage({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Reiniciar el carrito cuando se cambia de tienda
    setCart([]);
  }, [params.id]);

  const storeProducts = products.filter(
    (product) => product.storeId === Number(params.id)
  );

  const addToCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = storeProducts.find((p) => p.id === item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Tienda {params.id}</h1>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {storeProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <p className="font-bold mt-2">Precio: ${product.price}</p>
              <Button
                onClick={() => addToCart(product.id)}
                className="mt-4 w-full"
              >
                Agregar al carrito
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="flex justify-between items-center mb-2">
            <span>Total items: {getTotalItems()}</span>
            <span>Total: ${getTotalPrice()}</span>
          </div>
          <Button onClick={() => router.push("/checkout")} className="w-full">
            Proceder al pago
          </Button>
        </div>
      )}
    </div>
  );
}
