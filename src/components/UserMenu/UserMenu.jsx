// import { useDispatch } from "react-redux";
// import {logOut}...........................................
// import {useAuth}.........................................
import css from "./userMenu.module.css";
const UserMenu = () => {
  //  const dispatch = useDispatch();
  //  const { user } = useAuth();
  <div className={css.userContainer}>
    {/* <h2>Welcome,{user.email}</h2> */}
    <h2>Welcome,{}</h2>
    {/* <button type="button" onClick={() => dispatch(logOut())}>
      Log Out
    </button> */}
    <button className={css.button} type="button">
      Log out
    </button>
  </div>;
};
export default UserMenu;
