import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
import { SiHomeadvisor } from 'react-icons/si';
import { Button } from '@mui/material';
import { RiContactsBookFill } from 'react-icons/ri';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <Button variant="outlined">
          Home <SiHomeadvisor />
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Button variant="outlined">
            Contacts Book <RiContactsBookFill />
          </Button>
        </NavLink>
      )}
    </nav>
  );
};
