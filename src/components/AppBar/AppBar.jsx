import css from "./appBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(isUserLogin);

  return (
    <div className={css.menu}>
      <div className={css.nawWrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};
export default AppBar;
