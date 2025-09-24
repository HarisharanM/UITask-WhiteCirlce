import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Whitecircle — Content that grows brands",
  description: "Content that grows brands",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-wc_bg text-wc_text antialiased`}>
        {/* main grows to push footer to bottom */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}