import Link from "next/link";
import { Home, ShoppingCart, User } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t py-3 bg-primary text-secondary">
      <div className="container mx-auto flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center">
          <Home className="h-6 w-6" />
          <span className="text-xs">Inicio</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center">
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs">Carrito</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <User className="h-6 w-6" />
          <span className="text-xs">Perfil</span>
        </Link>
      </div>
    </nav>
  );
}
