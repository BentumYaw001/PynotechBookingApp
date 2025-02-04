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
