"use client";

import { create } from 'zustand';
// Removed persist middleware to avoid localStorage SSR issues

const BG_COLORS = ['#FFFFFF', '#FDF6E3', '#F5F5F5']; // White, Solarized Light, Gray
const TEXT_COLORS = ['#000000', '#657B83', '#333333']; // Black, Solarized Text, Dark Gray

interface ViewSettingsState {
  fontSize: number;
  pageWidth: number;
  bgColor: string;
  textColor: string;
  bgColorIndex: number;
  textColorIndex: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  increasePageWidth: () => void;
  decreasePageWidth: () => void;
  setNextBgColor: () => void;
  setNextTextColor: () => void;
  reset: () => void;
}

const initialState = {
  fontSize: 16,
  pageWidth: 100,
  bgColor: BG_COLORS[0],
  textColor: TEXT_COLORS[0],
  bgColorIndex: 0,
  textColorIndex: 0,
};

// Check if we're on the client side
const isBrowser = typeof window !== 'undefined';

export const useViewSettingsStore = create<ViewSettingsState>((set) => ({
  ...initialState,
  increaseFontSize: () => set((state: any) => ({ fontSize: Math.min(state.fontSize + 2, 24) })),
  decreaseFontSize: () => set((state: any) => ({ fontSize: Math.max(state.fontSize - 2, 12) })),
  increasePageWidth: () => set((state: any) => ({ pageWidth: Math.min(state.pageWidth + 10, 100) })),
  decreasePageWidth: () => set((state: any) => ({ pageWidth: Math.max(state.pageWidth - 10, 50) })),
  setNextBgColor: () => set((state: any) => {
    const nextIndex = (state.bgColorIndex + 1) % BG_COLORS.length;
    return { bgColorIndex: nextIndex, bgColor: BG_COLORS[nextIndex] };
  }),
  setNextTextColor: () => set((state: any) => {
    const nextIndex = (state.textColorIndex + 1) % TEXT_COLORS.length;
    return { textColorIndex: nextIndex, textColor: TEXT_COLORS[nextIndex] };
  }),
  reset: () => set(initialState),
}));
