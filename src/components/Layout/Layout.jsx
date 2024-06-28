// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
// import {isLoggedIn} from selectors........................
import { Suspense } from "react";
const Layout = () => {
  // const isLogin = useSelectors(isLoggedIn);
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
