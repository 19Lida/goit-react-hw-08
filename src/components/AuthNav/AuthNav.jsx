import { NavLink } from "react-router-dom";
import css from "./authNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.box}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>

      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
