"use client"

import Link from "next/link"
import "./globals.css"
import { Montserrat, Dancing_Script } from "next/font/google"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className={montserrat.className}>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; Agus &amp; Gonza</p>
        </footer>
      </body>
    </html>
  )
}

