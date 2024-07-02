import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(isUserLogin);

  console.log(isLoggedIn);

  return (
    <div className="navBox">
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navLink}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};
export default Navigation;
