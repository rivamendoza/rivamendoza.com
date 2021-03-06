import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import './stylesheets/Main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

