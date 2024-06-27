import { BrowserRouter } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { useEffect } from "react";
// const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
// const HomePage = lazy(() => import("./pages/HomePage.jsx"));
// const LoginPage = lazy(() => import("./pages/HomePage.jsx"));
// const RagistrarionPage = lazy(() => import("./pages/RegistrationPage.jsx"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

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
      {/* <div> */}
      {/* <h1 className="title">Phonebook</h1> */}
      <Layout />
      {/* <Suspense fallback={<p>...Load page</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RagistrarionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense> */}
      ;{/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
