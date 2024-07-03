import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import { isUserLogin } from "../../redux/auth/selectors";

import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./loginPage.module.css";

const LoginPage = () => {
  const isLoggedIn = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={css.loginContainer}>
      <h2>Login page</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
