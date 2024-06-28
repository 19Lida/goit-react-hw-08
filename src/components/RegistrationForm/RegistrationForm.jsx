import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";
import css from "./registrationForm.module.css";
const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      //   validationSchema={Yup.object({
      //     name: Yup.string().min(3).max(50).required(),
      //     number: Yup.string().min(3).max(50).required(),
      //   })}
      onSubmit={(values, { resetForm }) => {
        //   handleAddContact({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.box}>
          <label className={css.label} htmlFor="email">
            Email:
          </label>
          <Field className={css.field} type="text" id="email" name="email" />
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
