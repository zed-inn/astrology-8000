import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vedic Astrology & Courses",
  description: "Learn ancient wisdom.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} bg-[#FDFBF7] text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
