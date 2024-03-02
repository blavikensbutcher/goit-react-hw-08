import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout.jsx';

const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login/Login.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts.jsx'));

function App() {
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
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
