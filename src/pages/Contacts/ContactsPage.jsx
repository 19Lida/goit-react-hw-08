import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contactsOps";
import css from "./contactsPage.module.css";
import ContactList from "../../components/ContactList/ContactList";
const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    // getAllContacts();
  }, [dispatch]);
  return (
    <div className={css.ContactsContainer}>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
