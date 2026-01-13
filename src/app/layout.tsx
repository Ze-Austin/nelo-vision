import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AppNavigation from "@/components/wrappers/AppNavigation";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Visioneering 2026 with Nelo",
  description: "Visioneering 2026 with Nelo Nwokike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <AppNavigation />
        {children}
      </body>
    </html>
  );
}
