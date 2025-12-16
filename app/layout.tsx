import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmic Mirror | Vedic Astrology, Tarot & Healing",
  description:
    "Your sacred space for spiritual guidance, Tarot, and personalized chart analysis. Guided by Kaarthika Iyer & Saroj.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF7] text-gray-900">{children}</body>
    </html>
  );
}
