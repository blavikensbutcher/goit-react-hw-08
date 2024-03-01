import './App.css';
import { ContactList } from './ContactList/ContactList.jsx';
import { SearchBox } from './SearchBox/SearchBox.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { useEffect } from 'react';
import { fetchContacts } from '../api/api.js';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="container">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
