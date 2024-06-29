import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
// import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../../components/UserMenu/UserMenu";
import { isUserLogin } from "../../redux/auth/selectors";
// import { Suspense } from "react";
const Layout = () => {
  const isLoggedIn = useSelector(isUserLogin);
  return (
    <div>
      <AppBar />
      {/* {!isLoggedIn && <AuthNav />} */}
      {isLoggedIn && <UserMenu />}
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
    </div>
  );
};
export default Layout;
