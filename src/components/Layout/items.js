import { nanoid } from "nanoid";
const items = [
  {
    id: nanoid(),
    text: "HomePage",
    link: "/",
  },
  {
    id: nanoid(),
    text: "RegistrationPage",
    link: "/register",
  },
  {
    id: nanoid(),
    text: "LoginPage",
    link: "/login",
  },
  {
    id: nanoid(),
    text: "ContactsPage",
    link: "/contacts",
  },
];
export default items;
