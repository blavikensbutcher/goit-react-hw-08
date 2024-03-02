import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import styles from './Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const userSchema = Yup.object().shape({
    name: Yup.string().required('Name must be not empty'),
    email: Yup.string()
      .min(5, '5 symbols min')
      .max(40, 'email too long')
      .required('Email must be not empty'),
    password: Yup.string()
      .min(5, '5 symbols min')
      .max(17, 'password too long')
      .required('Password must be not empty'),
  });

  const passwordID = useId();
  const emailID = useId();
  const nameID = useId();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={values => {
          dispatch(register({ ...values }));
        }}
        validationSchema={userSchema}
      >
        <Form className={styles.container}>
          <label htmlFor={nameID}>Name:</label>
          <Field type="text" name="name" id={nameID}></Field>
          <ErrorMessage name="name" component="span" />
          <label htmlFor={emailID}>Email:</label>
          <Field type="email" name="email" id={emailID}></Field>
          <ErrorMessage name="email" component="span" />
          <label htmlFor={passwordID}>Password:</label>
          <Field type="password" name="password" id={passwordID}></Field>
          <ErrorMessage name="password" component="span" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
