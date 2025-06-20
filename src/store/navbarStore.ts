// src/store/navbarStore.ts

import { create } from 'zustand';

interface NavbarStore {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  // Initial state
  isMenuOpen: false, // Defaultnya menu tertutup

  // Actions
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));