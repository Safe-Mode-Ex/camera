import React from 'react';
import type {Container} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Container,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
