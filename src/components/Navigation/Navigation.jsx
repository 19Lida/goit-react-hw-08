// import {useSelector}......................
import css from "./navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  // const isLogin = useSelector(isLoggedIn);
  return (
    <div className={css.box}>
      <NavLink to="/">Home</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </div>
  );
};
export default Navigation;
