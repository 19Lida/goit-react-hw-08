import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operation";
import { getUser } from "../../redux/auth/selectors";
import css from "./userMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const { name } = useSelector(getUser);

  return (
    <div className={css.userContainer}>
      {name},
      <button className={css.button} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
