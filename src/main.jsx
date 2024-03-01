import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

import { Provider } from 'react-redux';
import { persistedStore, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
