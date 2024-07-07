import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { Parcel } from 'components/Parcel';
import { store } from './redux/store';

import 'styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Parcel />
    </Provider>
  </React.StrictMode>
);
