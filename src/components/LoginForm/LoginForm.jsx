import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { nanoid } from "nanoid";
import css from "./loginForm.module.css";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});
const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));

    resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
