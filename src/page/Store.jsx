import { create } from "zustand";
import ProfilePic from "/src/assets/images/specialist/portfolio picture.jpg";
export const useSplashStore = create((set) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
}));

export const UseProfileStore = create(() => ({
  ProfileImage: ProfilePic,
}));

// export const useCurrentTimeStore = create((set) => ({
//   hours: new Date().getHours(),
//   greeting: "",
//   location: null,
//   city: "",
//   country: "",

//   updateTime: () => {
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         try {
//           // Fetch city and country using OpenWeather API (replace with your API key)
//           const response = await fetch(
//             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
//           );
//           const data = await response.json();

//           const city = data.city || data.locality || "Unknown City";
//           const country = data.countryName || "Unknown Country";

//           // Get local time
//           const localTime = new Date().toLocaleTimeString("en-US", {
//             hour: "numeric",
//             hour12: false,
//             timeZone: data.timezone || "UTC",
//           });

//           const hours = parseInt(localTime.split(":")[0]);

//           let greeting = "Evening";
//           if (hours < 12) {
//             greeting = "Morning";
//           } else if (hours < 15) {
//             greeting = "Afternoon";
//           }

//           set({ hours, greeting, city, country });
//         } catch (error) {
//           console.error("Error fetching location:", error);
//         }
//       },
//       (error) => {
//         console.error("Error getting geolocation:", error);
//       }
//     );
//   },
// }));

// // Auto-update every 1 minute
// setInterval(() => {
//   useCurrentTimeStore.getState().updateTime();
// }, 2000);

export const useCurrentTimeStore = create((set) => ({
  hours: new Date().getHours(),
  greeting: "",
  town: "",
  city: "",
  country: "",

  updateTime: () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch local town, city, and country using BigDataCloud API
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();

          const town =
            data.locality || data.principalSubdivision || "Unknown Town";
          const city = data.city || "Unknown City";
          const country = data.countryName || "Unknown Country";

          // Get local time based on detected time zone
          const localTime = new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: false,
            timeZone: data.timezone || "UTC",
          });

          const hours = parseInt(localTime.split(":")[0]);

          let greeting = "Evening";
          if (hours < 12) {
            greeting = "Morning";
          } else if (hours < 15) {
            greeting = "Afternoon";
          }

          set({ hours, greeting, town, city, country });
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  },
}));

// Auto-update every 1 minute
setInterval(() => {
  useCurrentTimeStore.getState().updateTime();
}, 2000);
