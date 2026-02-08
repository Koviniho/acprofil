import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AC PROFIL AG – Kunststoffprofile nach Mass",
  description:
    "Innovative, partnerschaftliche Lösungen für Ihre individuellen Anforderungen. Hersteller von massgeschneiderten Kunststoffprofilen in Huttwil, Schweiz.",
  keywords: [
    "Kunststoffprofile",
    "Extrusion",
    "AC Profil",
    "Huttwil",
    "Kunststoffherstellung",
    "Thermoplast",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
