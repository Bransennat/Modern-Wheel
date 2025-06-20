import React from 'react';
import Link from 'next/link'; // <-- (PENTING) Ganti import ke 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-gray-900 mt-10">
      {/* Garis di atas footer untuk menandakan section */}
      <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" /> 

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            {/* Menggunakan Link untuk navigasi cepat tanpa reload halaman */}
            <Link href="/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="Modern Wheel Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Modern Wheel
              </span>
            </Link>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
            {/* ===== BAGIAN RESOURCES DIJADIKAN KOMENTAR ===== */}
            {/* ... (bagian ini tidak berubah) ... */}

            {/* ===== BAGIAN FOLLOW US DIJADIKAN KOMENTAR ===== */}
            {/* ... (bagian ini tidak berubah) ... */}

            {/* ===== BAGIAN LEGAL TETAP AKTIF DAN LINKNYA DIPERBARUI ===== */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  {/* Menggunakan 'href' bukan 'to' */}
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  {/* Menggunakan 'href' bukan 'to' */}
                  <Link href="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bagian Copyright di bawah sendiri */}
      <div className="px-4 py-6 bg-slate-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          &copy; {new Date().getFullYear()} <Link href="/" className="hover:underline">Modern Wheel™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;