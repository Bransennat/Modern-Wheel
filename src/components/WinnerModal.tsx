// src/components/WinnerModal.tsx
'use client';
import { useNameStore } from "../store/nameStore";

const WinnerModal = () => {
  const { winner, setWinner, removeName } = useNameStore();

  // Jika tidak ada pemenang, jangan render modal
  if (!winner) {
    return null;
  }

  const handleRemove = () => {
    removeName(winner.id);
    setWinner(null); // Tutup modal
  };

  const handleClose = () => {
    setWinner(null); // Tutup modal
  };

  return (
    // Backdrop Modal
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[50]">
      {/* Konten Modal */}
      <div className="bg-slate-800 text-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center z-[60] relative">
        <h2 className="text-2xl font-bold text-slate-400 mb-2">The Winner Is...</h2>

        <p className="text-5xl font-bold text-yellow-400 break-words mb-8">
          {winner.name}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleRemove}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Remove
          </button>
          <button
            onClick={handleClose}
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;