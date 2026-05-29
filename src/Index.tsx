import React from 'react';
import type {Container} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import {HistoryRouter} from './shared/lib/history-router';
import browserHistory from './browser-history';
const {BASE_URL} = import.meta.env;

const root = ReactDOM.createRoot(
  document.getElementById('root') as Container,
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory} basename={BASE_URL}>
      <App />
    </HistoryRouter>
  </React.StrictMode>,
);
