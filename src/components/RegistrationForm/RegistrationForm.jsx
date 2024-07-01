import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
// import { nanoid } from "nanoid";
import css from "./registrationForm.module.css";
import { register } from "../../redux/auth/operation";
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting values:", values);
    dispatch(register(values));

    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <div className={css.box}>
          <label className={css.label} htmlFor="name">
            Name:
          </label>
          <Field className={css.field} type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor="email">
            Email:
          </label>
          <Field className={css.field} type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor="password">
            Password:
          </label>
          <Field
            className={css.field}
            type="password"
            id="password"
            name="password"
          />
          <ErrorMessage name="password" />
        </div>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
