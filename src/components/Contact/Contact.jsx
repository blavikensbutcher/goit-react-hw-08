import styles from './Contact.module.css';
import { MdPeopleAlt } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../api/api';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ minWidth: 275 }} className={styles.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          <FaUserCircle size={15} className={styles.icon} />
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <FaPhoneAlt size={15} className={styles.icon} /> {number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="error"
          style={{ marginRight: 70 }}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
        <Button size="small" onClick={() => console.log('ediiit')} color="inherit">
          Edit Contact
        </Button>
      </CardActions>
    </Card>

    // <li className={styles.container} data-id={id}>
    //   <div>
    //     <p className={styles.text}>
    //       <MdPeopleAlt size={15} /> {name}
    //     </p>
    //     <p className={styles.text}>
    //       <FaPhoneAlt size={15} /> {number}
    //     </p>
    //   </div>
    //   <div>
    //     <button className={styles.btn} onClick={() => dispatch(deleteContact(id))}>
    //       Delete
    //     </button>
    //   </div>
    // </li>
  );
};
