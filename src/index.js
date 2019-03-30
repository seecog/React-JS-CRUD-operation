import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './First';
import Second from './Second';
import Product from './Product';
import Employees from './components/Employees/Employees';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Employees />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
