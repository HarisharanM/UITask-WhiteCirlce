import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- Import the Footer

export const metadata: Metadata = {
  title: "Whitecircle — Content that grows brands",
  description: "Content that grows brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`flex min-h-screen flex-col bg-wc_bg text-wc_text antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer /> {/* <-- Add the Footer here */}
        </Providers>
      </body>
    </html>
  );
}
