import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import { SnackbarProvider } from 'notistack';
const store = configureStore({
  reducer
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   <SnackbarProvider
  maxSnack={4}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}

  autoHideDuration={3000}
>
  <Provider store={store}>
    <App />
  </Provider>

  </SnackbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
