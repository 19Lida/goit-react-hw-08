// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/auth/selectors";
import css from "./userMenu.module.css";
const UserMenu = () => {
  //  const dispatch = useDispatch();
  const { name } = useSelector(getUser);
  <div className={css.userContainer}>
    {name},
    <button className={css.button} type="button">
      Logout
    </button>
  </div>;
};
export default UserMenu;
