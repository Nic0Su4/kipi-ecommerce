import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kipi Ecommerce",
  description: "Compra con WorldCoin y recoge tus productos con un código QR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-gray-900 bg-secondary`}>
        <div className="min-h-screen pb-16">{children}</div>
        <Navigation />
      </body>
    </html>
  );
}
