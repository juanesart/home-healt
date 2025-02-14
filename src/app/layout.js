import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeHealth",
  description: "Agendar citas médicas a domicilio nunca fue tan fácil. Con nuestra plataforma, conecta con médicos y profesionales de la salud para recibir atención en la comodidad de tu hogar. Servicio rápido, confiable y accesible. Cuida tu salud sin salir de casa.",
};

export default function RootLayout({ children }) {
  return (
    <html className=" scroll-smooth" lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16821835763"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16821835763');
            `,
          }}
        />
        {/* Evento de conversión */}
        <Script
          id="conversion-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-16821835763/eDf8CI3snYsaEPOvo9U-',
                'value': 1.0,
                'currency': 'COP',
                'transaction_id': ''
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
