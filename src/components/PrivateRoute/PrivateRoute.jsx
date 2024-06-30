import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/selectors";
const PrivateRoute = () => {
  const { isLoggedIn } = useSelector(isUserLogin);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
