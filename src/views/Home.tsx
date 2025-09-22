// src/views/Home.tsx
import React from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-12 gap-4 bg-gray-100 p-4">
        {/* Kiri */}
        <aside className="col-span-3 bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-blue-600">Upload Dokumen</li>
            <li className="cursor-pointer hover:text-blue-600">Tanda Tangan Saya</li>
            <li className="cursor-pointer hover:text-blue-600">Riwayat</li>
          </ul>
        </aside>

        {/* Tengah */}
        <main className="col-span-6 bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center">
          <div
            className="w-full h-64 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition"
          >
            <p className="text-gray-500 text-center">
              Tarik & letakkan file di sini <br /> atau klik untuk pilih file
            </p>
          </div>
        </main>

        {/* Kanan */}
        <aside className="col-span-3 bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-bold mb-4">Informasi</h2>
          <div className="text-sm space-y-2">
            <p><span className="font-semibold">Status:</span> Belum ada file</p>
            <p><span className="font-semibold">Tipe:</span> -</p>
            <p><span className="font-semibold">Ukuran:</span> -</p>
          </div>
        </aside>
      </div>
    </>
  );
}
