import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeHealth",
  description: "Agendar citas médicas a domicilio nunca fue tan fácil. Con nuestra plataforma, conecta con médicos y profesionales de la salud para recibir atención en la comodidad de tu hogar. Servicio rápido, confiable y accesible. Cuida tu salud sin salir de casa.",
};

export default function RootLayout({ children }) {
  return (
    <html className=" scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
