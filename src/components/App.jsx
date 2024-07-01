import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute.jsx";
import "./App.css";
import Layout from "../components/Layout/Layout.jsx";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operation.js";
import { selectIsRefreshing } from "../redux/auth/selectors.js";
// import { fetchContacts } from "../redux/contactsOps";
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
  const { isRefreshing } = useSelector(selectIsRefreshing);
  // const getAllContacts = () => {
  //   dispatch(fetchContacts());
  // };

  // useEffect(() => {
  //   dispatch(fetchContacts());
  //   // getAllContacts();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RagistrarionPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
