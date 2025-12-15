import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmic Mirror",
  description: "Cosmic Mirror is your sacred space for spiritual guidance and self-discovery. Explore the wisdom of Tarot, personalized chart analysis, crystal healing, and holistic practices designed to align your mind, body, and soul. Whether you seek clarity, healing, or personal growth, Cosmic Mirror reflects your inner universe and helps you navigate life with insight and balance.",
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
