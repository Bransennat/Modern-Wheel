import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 text-slate-300">
      <h1 className="text-4xl font-bold mb-6 text-white">Kebijakan Privasi</h1>
      
      <div className="prose prose-invert max-w-none">
        <p><em>Terakhir diperbarui: 17 Juni 2025</em></p>

        <h2 className="text-2xl font-semibold mt-6">1. Informasi yang Kami Kumpulkan</h2>
        <p>
          Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami. Untuk aplikasi Modern Wheel, ini termasuk:
        </p>
        <ul>
          <li>
            <strong>Data Entri:</strong> Nama atau teks apa pun yang Anda masukkan ke dalam area input untuk diputar di roda. Data ini disimpan sementara di browser Anda menggunakan teknologi `localStorage` untuk menjaga sesi Anda tetap aktif, tetapi tidak dikirim atau disimpan di server kami.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
        <p>
          Informasi yang Anda berikan hanya digunakan untuk fungsi inti aplikasi:
        </p>
        <ul>
          <li>Untuk menampilkan entri pada segmen roda putar.</li>
          <li>Untuk menentukan dan mengumumkan pemenang secara acak.</li>
          <li>Untuk menyimpan daftar entri di browser Anda agar tidak hilang saat halaman dimuat ulang.</li>
        </ul>

        {/* Anda bisa melanjutkan menambahkan poin lain di sini... */}
        
        <h2 className="text-2xl font-semibold mt-6">Kontak Kami</h2>
        <p>
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di [alamat.email.anda@contoh.com].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;