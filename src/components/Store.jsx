import { create } from "zustand";

export const useSplashStore = create((set) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
}));
