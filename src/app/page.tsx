'use client'; // <-- Direktif ini WAJIB ada karena komponen Wheel dan NameList bersifat interaktif (menggunakan hooks)

import Wheel from "@/components/Wheel";
import NameList from "@/components/NameList";

export default function HomePage() {
  return (
    // Container ini akan mengisi ruang yang tersedia (di antara Navbar dan Footer)
    // Sesuai dengan yang diatur di layout.tsx
    <div className="flex-grow flex items-center justify-center p-4 sm:p-8">
      
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ===== CONTAINER IKLAN (MULAI) ===== */}
        <div className="w-full max-w-[728px] h-[90px] mx-auto mb-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center">
          <span className="text-slate-500 text-lg">
            Container (728x90)
          </span>
        </div>
        {/* ===== CONTAINER IKLAN (SELESAI) ===== */}

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Kolom Kiri (Wheel) */}
          <div className="w-full lg:w-3/5 flex items-center justify-center">
            <Wheel/>
          </div>

          {/* Kolom Kanan (NameList) */}
          <div className="w-full lg:w-2/5 aspect-square lg:aspect-auto">
            <NameList />
          </div>
          
        </div>
      </div>
    </div>
  );
};