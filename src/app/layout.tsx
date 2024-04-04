import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderComponent } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inlaze Movies",
  description: "Descubre nuevas películas, encontraras las calificaciones, entre otras cosas.",
  keywords: ['movies', 'inlaze', 'películas', 'calificaciones películas', 'películas en cartelera']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className+' '+' bg-gray-950'}>
        <HeaderComponent/>
        {children}
      </body>
    </html>
  );
}
