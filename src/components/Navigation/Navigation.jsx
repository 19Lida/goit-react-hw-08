import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
// import css from "./navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const isLoggedIn = useSelector(isUserLogin);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};
export default Navigation;
