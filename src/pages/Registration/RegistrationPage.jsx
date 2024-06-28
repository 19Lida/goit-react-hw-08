import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
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
