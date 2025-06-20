// src/components/ConfettiEffect.tsx
'use client';
import { useState, useEffect, useRef } from 'react'; // Impor useRef
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useNameStore, type NameEntry } from '../store/nameStore';

const ConfettiEffect = () => {
  const { width, height } = useWindowSize();
  const { winner } = useNameStore();
  const [show, setShow] = useState(false);

  // 'Ref' untuk menyimpan nilai 'winner' dari render sebelumnya
  const prevWinnerRef = useRef<NameEntry | null>(null);

  useEffect(() => {
    // Ambil nilai winner sebelumnya dari ref
    const prevWinner = prevWinnerRef.current;

    // KONDISI KUNCI:
    // Hanya picu confetti jika sebelumnya TIDAK ADA pemenang,
    // dan sekarang ADA pemenang.
    if (!prevWinner && winner) {
      setShow(true); // Tampilkan confetti

      // Atur timer untuk menghilangkan confetti setelah 5 detik
      // Timer ini tidak akan terganggu saat modal ditutup
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }

    // Selalu update ref dengan nilai winner saat ini untuk render berikutnya
    prevWinnerRef.current = winner;
    
  }, [winner]); // Tetap 'mendengarkan' perubahan pada winner

  if (!show) {
    return null;
  }

  // ... sisa kode Confetti JSX tetap sama
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={200}
      recycle={false}
      tweenDuration={5000}
      confettiSource={{ x: width / 2, y: height / 2, w: 0, h: 0 }}
      initialVelocityX={{ min: -10, max: 10 }}
      initialVelocityY={{ min: -10, max: 10 }}
      gravity={0.05}
      wind={0}
      colors={['#FFD700', '#FF4500', '#1E90FF', '#32CD32', '#9400D3']}
      style={{ zIndex: 100, position: 'fixed', top: 0, left: 0 }}
    />
  );
};

export default ConfettiEffect;