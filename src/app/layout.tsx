import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Les polices, chargées proprement par Next (elles alimentent les variables CSS).
const disp = Archivo({ subsets: ["latin"], variable: "--font-disp", weight: ["500", "600", "700", "800"] });
const body = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Atlas Pro — Fournitures hôtellerie",
  description: "Fournisseur B2B pour restaurants, hôtels et traiteurs.",
};

// Le "gabarit" commun à toutes les pages : en-tête + contenu + pied de page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${disp.variable} ${body.variable} ${mono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
