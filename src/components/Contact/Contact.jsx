import styles from './Contact.module.css';
import { MdPeopleAlt } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../api/api';
import { useDispatch } from 'react-redux';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.container} data-id={id}>
      <div>
        <p className={styles.text}>
          <MdPeopleAlt size={15} /> {name}
        </p>
        <p className={styles.text}>
          <FaPhoneAlt size={15} /> {phone}
        </p>
      </div>
      <div>
        <button className={styles.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </li>
  );
};
