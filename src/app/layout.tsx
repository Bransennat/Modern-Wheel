import type { Metadata } from "next";
import "./globals.css"; // Impor file CSS global Anda

// Impor komponen-komponen yang akan ada di semua halaman
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WinnerModal from "@/components/WinnerModal";
import ConfettiEffect from "@/components/ConfettiEffect";
import { Analytics } from '@vercel/analytics/react';

// Metadata ini adalah cara Next.js untuk SEO, pengganti Helmet
export const metadata: Metadata = {
  title: "Modern Wheel - Aplikasi Undian Roda Putar",
  description: "Buat undian acak dengan mudah menggunakan roda putar modern untuk menentukan pemenang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100">
        {/* main bertindak sebagai container utama dengan flexbox */}
        <main className="min-h-screen flex flex-col">
          <Navbar />

          {/* {children} adalah tempat di mana konten dari page.tsx akan dirender */}
          {children} 
          
          <Footer />
        </main>
        
        {/* Komponen global ini berada di luar 'main' agar bisa 'mengambang' di atas segalanya */}
        <WinnerModal />
        <ConfettiEffect />
        <Analytics />
      </body>
    </html>
  );
}