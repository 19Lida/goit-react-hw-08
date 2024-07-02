import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const isLoggedIn = useSelector(isUserLogin);

  console.log(isLoggedIn);

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};
export default Navigation;
