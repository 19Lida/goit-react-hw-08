import LoginForm from "../../pages/Login/LoginPage";
import css from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.loginContainer}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
