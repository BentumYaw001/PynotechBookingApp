import { create } from "zustand";
import ProfilePic from "/src/assets/images/specialist/portfolio picture.jpg";
export const useSplashStore = create((set) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
}));

export const UseProfileStore = create(() => ({
  ProfileImage: ProfilePic,
}));
