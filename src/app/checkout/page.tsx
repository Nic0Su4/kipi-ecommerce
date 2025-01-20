"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CheckoutPage() {
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handlePayment = () => {
    // Aquí iría la lógica de pago con WorldCoin
    // Por ahora, simplemente generamos un QR falso
    setQrCode(
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=OrderID12345"
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Pago</h1>
      <Card>
        <CardHeader>
          <CardTitle>Resumen de la orden</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total: $100</p>
          <Button onClick={handlePayment} className="mt-4 w-full">
            Pagar con WorldCoin
          </Button>
          {qrCode && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">
                Código QR para recoger tu pedido
              </h2>
              <Image
                src={qrCode || "/placeholder.svg"}
                alt="QR Code"
                className="mx-auto"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
