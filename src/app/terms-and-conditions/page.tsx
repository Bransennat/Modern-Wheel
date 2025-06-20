import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 text-slate-300">
      <h1 className="text-4xl font-bold mb-6 text-white">Syarat & Ketentuan</h1>
      
      <div className="prose prose-invert max-w-none">
        <p><em>Terakhir diperbarui: 17 Juni 2025</em></p>

        <h2 className="text-2xl font-semibold mt-6">1. Persetujuan</h2>
        <p>
          Dengan mengakses dan menggunakan situs web Modern Wheel (Layanan), Anda setuju untuk menerima dan mematuhi Syarat & Ketentuan ini. Jika Anda tidak setuju, mohon untuk tidak menggunakan Layanan kami.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Batasan Tanggung Jawab</h2>
        <p>
          Layanan ini disediakan SEBAGAIMANA ADANYA. Kami tidak bertanggung jawab atas kehilangan data, kerusakan, atau kerugian apa pun yang timbul dari penggunaan Layanan ini. Anda bertanggung jawab penuh atas data yang Anda masukkan.
        </p>
        
        {/* Anda bisa melanjutkan menambahkan poin lain di sini... */}

        <h2 className="text-2xl font-semibold mt-6">Kontak Kami</h2>
        <p>
          Jika Anda memiliki pertanyaan, silakan hubungi kami di [alamat.email.anda@contoh.com].
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;