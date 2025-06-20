// src/store/nameStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface NameEntry {
  id: string;
  name: string;
}

interface NameStore {
  names: NameEntry[];
  rawText: string;
  isSpinning: boolean;
  winner: NameEntry | null;
  updateNamesFromText: (text: string) => void;
  shuffleNames: () => void;
  sortNames: () => void;
  removeName: (id: string) => void;
  setIsSpinning: (spinning: boolean) => void;
  setWinner: (winner: NameEntry | null) => void;
}

export const useNameStore = create<NameStore>()(
  persist(
    (set) => ({
      names: [],
      rawText: "",
      isSpinning: false,
      winner: null,

      updateNamesFromText: (text) => {
        const lines = text.split('\n');
        const newNames = lines
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .map((line, index) => ({
            id: `${Date.now()}-${index}`,
            name: line,
          }));
        
        set({ names: newNames, rawText: text, winner: null });
      },

      shuffleNames: () => {
        set((state) => {
          const shuffled = [...state.names];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          const newRawText = shuffled.map(entry => entry.name).join('\n');
          return { names: shuffled, rawText: newRawText, winner: null };
        });
      },

      sortNames: () => {
        set((state) => {
          const sorted = [...state.names].sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { numeric: true })
          );
          const newRawText = sorted.map(entry => entry.name).join('\n');
          return { names: sorted, rawText: newRawText, winner: null };
        });
      },

      removeName: (id) => {
        set((state) => {
          const newNames = state.names.filter((entry) => entry.id !== id);
          const newRawText = newNames.map(entry => entry.name).join('\n');
          return { names: newNames, rawText: newRawText };
        });
      },

      setIsSpinning: (spinning) => set({ isSpinning: spinning }),
      
      setWinner: (winner) => {
        set({ winner: winner });
      },
    }),
    {
      name: 'modern-wheel-names',
      partialize: (state) => ({
        names: state.names,
        rawText: state.rawText,
      }),
    }
  )
);