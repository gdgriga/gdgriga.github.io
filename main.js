import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App.jsx';

ReactDOM.render(
  <App url="/storage/main-info.json" />,
  document.getElementById('gdgriga-app')
);
