import email from "/src/assets/images/email-fill.svg";
import user from "/src/assets/images/person.svg";

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
