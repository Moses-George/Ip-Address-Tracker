import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './components/App';
import IPContextProvider from './store/IPContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IPContextProvider>
      <App />
    </IPContextProvider>
  </React.StrictMode>
);
