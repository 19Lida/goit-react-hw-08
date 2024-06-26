import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import css from "./layout.module.css";
const Layout = () => {
  return (
    <div className={css.layout}>
      <div className="container">
        <div className={css.layoutRow}>
          <AuthNav />
          <Navigation />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};
export default Layout;
