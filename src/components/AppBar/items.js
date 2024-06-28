import { nanoid } from "nanoid";
const items = [
  {
    id: nanoid(),
    text: "HomePage",
    link: "/",
    private: false,
  },
  {
    id: nanoid(),
    text: "RegistrationPage",
    link: "/register",
    private: false,
  },
  {
    id: nanoid(),
    text: "LoginPage",
    link: "/login",
    private: false,
  },
  {
    id: nanoid(),
    text: "ContactsPage",
    link: "/contacts",
    private: true,
  },
];
export default items;
