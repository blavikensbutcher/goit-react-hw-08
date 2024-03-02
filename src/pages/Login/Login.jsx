import styles from './Login.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';

const Login = () => {
  const dispatch = useDispatch();

  const userSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, '5 symbols minimum')
      .max(40, 'email too long')
      .required('Email must be not empty'),
    password: Yup.string()
      .min(7, '7 symbols min')
      .max(17, 'password too long')
      .required('Password must be not empty'),
  });

  const passwordID = useId();
  const emailID = useId();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          dispatch(logIn({ ...values }));
        }}
        validationSchema={userSchema}
      >
        <Form className={styles.container}>
          <label htmlFor={emailID}>Email:</label>
          <Field type="email" name="email" id={emailID}></Field>
          <ErrorMessage name="email" component="span" />
          <label htmlFor={passwordID}>Password:</label>
          <Field type="password" name="password" id={passwordID}></Field>
          <ErrorMessage name="password" component="span" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
