import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const getAllContacts = () => {
    dispatch(fetchContacts());
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <BrowserRouter>
      <div>
        {/* <h1 className="title">Phonebook</h1> */}
        <Layout />
        {/* <ContactForm /> */}

        {/* <SearchBox /> */}
        {/* <ContactList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
