// import { NavLink } from "react-router-dom";
// import items from "./items";
import css from "./appBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
// import UserMenu from "../UserMenu/UserMenu";
// import {isLoggedIn} from .............................
// import useAuth.........................................

// const AppBar = () => {
//   const elements = items.map(({ id, text, link }) => (
//     <li key={id}>
//       <NavLink className={css.link} to={link}>
//         {text}
//       </NavLink>
//     </li>
//   ));
//   return <ul className={css.menu}>{elements}</ul>;
// };
// export default AppBar;
const AppBar = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <div className={css.menu}>
      <div className={css.nawWrapper}>
        <Navigation />
        <AuthNav />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>
    </div>
  );
};
export default AppBar;
