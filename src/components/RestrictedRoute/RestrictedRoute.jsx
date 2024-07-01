import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
  // const isLoggedIn = useSelector(isUserLogin);
  // if (isLoggedIn) {
  //   return <Navigate to={redirectTo} />;
  // }
  // return <Outlet />;
  const { isLoggedIn } = useSelector(isUserLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
