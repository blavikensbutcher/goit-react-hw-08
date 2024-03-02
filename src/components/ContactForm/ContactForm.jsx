import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { addContact } from '../../api/api';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export const ContactForm = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string().min(3, '3 symbols min').max(50, 'Too long').required('Required field'),
    number: Yup.string().min(3, 'Too short').max(20, 'Too long').required('Required field'),
  });

  const nameID = useId();
  const numberID = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, action) => {
        dispatch(addContact({ ...values }));
        action.resetForm();
      }}
      validationSchema={userSchema}
    >
      <Form className={styles.container}>
        <label htmlFor={nameID} className={styles.text}>
          Name:
        </label>
        <Field type="text" name="name" id={nameID} className={styles.textField}></Field>
        <ErrorMessage name="name" component="span" className={styles.error} />
        <label htmlFor={numberID} className={styles.text}>
          Number:
        </label>
        <Field type="text" name="number" id={numberID} className={styles.textField}></Field>
        <ErrorMessage name="number" component="span" className={styles.error} />
        <Button variant="contained" type="submit" color="success">
          Add Contact
        </Button>
      </Form>
    </Formik>
  );
};
