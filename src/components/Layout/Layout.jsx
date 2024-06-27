import Navigation from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./layout.module.css";
import RegistrationPage from "../../pages/RegistrationPage";
const Layout = () => {
  return (
    <div className={css.layout}>
      <div className="container">
        <div className={css.layoutRow}>
          <AuthNav />
          <Navigation />
          <UserMenu />
          <RegistrationPage />
        </div>
      </div>
    </div>
  );
};
export default Layout;
