import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './state/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import reducer from './reducers';
import rootSaga from './sagas';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from "@mui/lab/AdapterDateFns";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <ThemeProvider theme={Theme}>
            <App />
          </ThemeProvider>
        </Router>
      </LocalizationProvider>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
