import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { isUserLogin } from "../../redux/auth/selectors";
import { register } from "../../redux/auth/operations";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./registrationPage.module.css";
const RegistrationPage = () => {
  const isLoggedIn = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(register(data));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={css.registerContainer}>
      <h2>Create Your Account </h2>
      <RegistrationForm onSubmit={handleRegister} />
    </div>
  );
};
export default RegistrationPage;
