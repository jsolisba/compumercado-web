import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompuMercado | Tecnología empresarial",
  description:
    "Infraestructura, nube, ciberseguridad, servicios administrados y tecnología empresarial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
