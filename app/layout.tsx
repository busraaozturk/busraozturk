import type { Metadata } from "next";
import { Geist, Inter, Caveat } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Büşra Öztürk — Frontend Developer",
  description:
    "React, Next.js ve TypeScript ile temiz ve erişilebilir web arayüzleri geliştiren frontend developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${geist.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg font-body text-body antialiased">
        {children}
      </body>
    </html>
  );
}
