import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/filterSlice.js';

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <form className={styles.container}>
      <label htmlFor="value">Find contacts by name:</label>
      <input
        type="text"
        id="value"
        className={styles.value}
        placeholder="search"
        onChange={event => {
          dispatch(filter(event.target.value));
        }}
      />
    </form>
  );
};
