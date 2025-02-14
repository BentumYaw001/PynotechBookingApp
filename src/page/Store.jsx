import { create } from "zustand";
import ProfilePic from "/src/assets/images/specialist/portfolio picture.jpg";
export const useSplashStore = create((set) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
}));

export const UseProfileStore = create(() => ({
  ProfileImage: ProfilePic,
}));

export const useCurrentTimeStore = create((set) => ({
  hours: new Date().getHours(),
  greeting: "",

  updateTime: () => {
    const hours = new Date().getHours();
    let greeting = "Good Evening";
    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours < 15) {
      greeting = "Good Afternoon";
    }

    set({ hours, greeting });
  },
}));

setInterval(() => {
  useCurrentTimeStore.getState().updateTime();
}, 2000);
