import './App.css';
// import { ContactList } from './ContactList/ContactList.jsx';
// import { SearchBox } from './SearchBox/SearchBox.jsx';
// import { ContactForm } from './ContactForm/ContactForm.jsx';
import { lazy, useEffect } from 'react';
import { fetchContacts } from '../api/api.js';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout.jsx';

const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login/Login.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          <Route
            path="/tasks"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
