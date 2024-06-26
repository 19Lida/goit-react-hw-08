import { NavLink } from "react-router-dom";
import items from "./items";
import css from "./appBar.module.css";

const AppBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={css.menu}>{elements}</ul>;
};
export default AppBar;
