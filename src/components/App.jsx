import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute.jsx";
import "./App.css";
import Layout from "../components/Layout/Layout.jsx";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { useEffect } from "react";
const ContactsPage = lazy(() => import("../pages/Contacts/ContactsPage.jsx"));
const HomePage = lazy(() => import("../pages/Home/HomePage.jsx"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage.jsx"));
const RagistrarionPage = lazy(() =>
  import("../pages/Registration/RegistrationPage.jsx")
);
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage.jsx"));

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
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<RagistrarionPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
