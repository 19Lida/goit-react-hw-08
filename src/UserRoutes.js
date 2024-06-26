import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/HomePage.jsx"));
const RagistrarionPage = lazy(() => import("./pages/RegistrationPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const UserRoutes = () => {
  <Suspense fallback={<p>...Load page</p>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RagistrarionPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>;
};
export default UserRoutes;
