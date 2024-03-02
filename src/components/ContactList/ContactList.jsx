import styles from './ContactList.module.css';

import { Contact } from '../Contact/Contact.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../api/api.js';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filter.filters.name);

  let filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(filters));

  return (
    <ul className={styles.box}>
      {filteredContacts.map(item => {
        return <Contact name={item.name} phone={item.phone} id={item.id} key={item.id} />;
      })}
    </ul>
  );
};
