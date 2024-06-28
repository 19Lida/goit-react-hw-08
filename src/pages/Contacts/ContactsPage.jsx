import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./contactsPage.module.css";
import ContactList from "../../components/ContactList/ContactList";
const ContactsPage = () => {
  return (
    <div className={css.ContactsContainer}>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
