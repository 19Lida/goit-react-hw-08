import RegistrationForm from "../Registration/RegistrationPage";
import css from "./registrationPage.module.css";
const RegistrationPage = () => {
  return (
    <div className={css.registerContainer}>
      <h2>Create Your Account </h2>;
      <RegistrationForm />;
    </div>
  );
};
export default RegistrationPage;
