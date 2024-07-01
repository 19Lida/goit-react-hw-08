import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
const PrivateRoute = ({ component: redirectTo = "/" }) => {
  const { isLoggedIn } = useSelector(isUserLogin);
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};
export default PrivateRoute;
