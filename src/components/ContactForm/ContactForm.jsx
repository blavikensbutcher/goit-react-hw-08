import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { addContact } from '../../api/api.js';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string().min(3, '3 symbols min').max(50, 'Too long').required('Must be not empty'),
    phone: Yup.string()
      .min(3, 'Too short')
      .max(20, 'Too long')
      .matches(
        /(^(1?)(\s?)([\s]?)((\(\d{3}\))|(\d{3}))([\s]?)([\s-]?)(\d{3})([\s-]?)(\d{4})+$)/gim,
        'Not a phone'
      )
      .required('Must be not empty'),
  });

  const nameID = useId();
  const numberID = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={values => {
        dispatch(addContact({ id: Date.now(), ...values }));
      }}
      validationSchema={userSchema}
    >
      <Form className={styles.container}>
        <label htmlFor={nameID}>Name:</label>
        <Field type="text" name="name" id={nameID} className={styles.field}></Field>
        <ErrorMessage name="name" component="span" className={styles.error} />
        <label htmlFor={numberID}>Number:</label>
        <Field type="text" name="phone" id={numberID} className={styles.field}></Field>
        <ErrorMessage name="phone" component="span" className={styles.error} />
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
