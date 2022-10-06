import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebaseContext } from './context/firebase';
import { FieldValue,app } from './lib/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<firebaseContext.Provider value={{app,FieldValue}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </firebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
