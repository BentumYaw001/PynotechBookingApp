import email from "/src/assets/images/email-fill.svg";
import user from "/src/assets/images/person.svg";
import manicure from "/src/assets/images/manicure.svg";

export const SignUpData = [
  {
    placeholder: "Bentum",
    label: "Full Name",
    icon: user,
    type: "text",
    id: "",
    name: "fullname",
  },
  {
    placeholder: "user@gmail.com",
    label: "Email",
    icon: email,
    type: "email",
    id: "",
    name: "email",
  },
  {
    placeholder: "+233",
    label: "Phone No.",
    icon: "",
    type: "number",
    id: "",
    name: "prefix",
  },
  {
    placeholder: "password",
    label: "Password",
    icon: "",
    type: "password",
    id: "Password",
    name: "password",
  },
];

import haircut from "/src/assets/images/haircut.svg";
import makeUp from "/src/assets/images/brush.svg";
import spa from "/src/assets/images/tub.svg";
export const ServicesData = [
  {
    img: haircut,
    name: "Haircut",
  },
  {
    img: makeUp,
    name: "Make up",
  },
  {
    img: manicure,
    name: "Manicure",
  },
  {
    img: spa,
    name: "Spa",
  },
];

import Lily from "/src/assets/images/p1.svg";
import Jayden from "/src/assets/images/p2.svg";
import Alex from "/src/assets/images/p3.svg";
import Ava from "/src/assets/images/p4.svg";

export const TopSpecialist = [
  {
    img: Lily,
    name: "Lily",
    tag: "Color Queen",
  },
  {
    img: Jayden,
    name: "Jayden",
    tag: "Shave Guru",
  },
  {
    img: Alex,
    name: "Alex",
    tag: "Hair Expert",
  },
  {
    img: Ava,
    name: "Ava",
    tag: "Style Pro",
  },
];

import bookings from "/src/assets/images/bookings.svg";
import chat from "/src/assets/images/chat.svg";
import home from "/src/assets/images/profile.svg";
import explore from "/src/assets/images/explore.svg";
import person from "/src/assets/images/person-nofill.svg";
export const FooterData = [
  {
    img: home,
    name: "Home",
  },
  {
    img: explore,
    name: "Explore",
  },
  {
    img: bookings,
    name: "Bookings",
  },
  {
    img: chat,
    name: "Chat",
  },
  {
    img: person,
    name: "Profile",
  },
];

import ScreenOne from "/src/page/ScreenOne.jsx";
import ScreenTwo from "/src/page/ScreenTwo.jsx";
import ScreenThree from "/src/page/ScreenThree.jsx";
import SignUp from "/src/page/SignUp.jsx";
import SignIn from "/src/page/SignIn";
import HomePage from "/src/page/HomePage";
import Profile from "/src/page/Profile";
import EditProfile from "/src/page/EditProfile.jsx";
export const RouteData = [
  {
    path: "/",
    page: <ScreenOne />,
  },
  {
    path: "/second-screen",
    page: <ScreenTwo />,
  },
  {
    path: "/third-screen",
    page: <ScreenThree />,
  },

  {
    path: "/signup-screen",
    page: <SignUp />,
  },

  {
    path: "/signin-screen",
    page: <SignIn />,
  },

  {
    path: "/home-screen",
    page: <HomePage />,
  },
  {
    path: "/profile-screen",
    page: <Profile />,
  },
  {
    path: "/editProfile-screen",
    page: <EditProfile />,
  },
  {
    path: "/booknow-screen",
    page: <BookNowPage />,
  },
];

import LogoutArrow from "/src/assets/images/LogoutArrow.svg";
import History from "/src/assets/images/history.svg";
import Payment from "/src/assets/images/minus-circle.svg";
import Phone from "/src/assets/images/phone.svg";
import Home from "/src/assets/images/home.svg";
import BookNowPage from "../page/BookNow";

export const ProfileMenuData = [
  {
    name: "Home",
    img: Home,
    route: "/home-screen",
  },
  {
    name: "Preferences",
    img: Phone,
    route: "",
  },
  {
    name: "Payment methods",
    img: Payment,
    route: "",
  },
  {
    name: "Appointment history",
    img: History,
    route: "",
  },
  {
    name: " Log out",
    img: LogoutArrow,
    route: "/signin-screen",
  },
];

export const UserData = [
  {
    label: "Full Name",
    type: "text",
    entry: "Bentum Yaw Richmond",
  },
  {
    label: "Email",
    type: "email",
    entry: "richmondbentum2020@gmail.com",
  },
  {
    label: "Username",
    type: "text",
    entry: "BigBen",
  },
  {
    label: "Password",
    type: "password",
    entry: "Bentum Yaw Richmond",
  },
];

import shareSpa from "/src/assets/images/telegram.svg";
import direction from "/src/assets/images/direction-adjustment.svg";
import website from "/src/assets/images/globe.svg";
import message from "/src/assets/images/message.svg";
import phone from "/src/assets/images/phone.svg";
export const SpaAddress = [
  {
    img: website,
    title: "Website",
  },
  {
    img: message,
    title: "Message",
  },
  {
    img: phone,
    title: "Call",
  },
  {
    img: direction,
    title: "Direction",
  },
  {
    img: shareSpa,
    title: "Share",
  },
];

export const SpaList = [
  {
    style: "Haircut",
    type: "30 Types",
  },
  {
    style: "Haircoloring",
    type: "20 Types",
  },
  {
    style: "Hairwash",
    type: "12 Types",
  },
];

export const SpaNavItem = [
  {
    name: "Services",
    route: "",
  },
  {
    name: "Specialist",
    route: "",
  },
  {
    name: "Package",
    route: "",
  },
  {
    name: "Gallery",
    route: "",
  },
  {
    name: "Review",
    route: "",
  },
];
