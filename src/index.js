import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyForm from './MyForm';
import * as serviceWorker from './serviceWorker';
import Endors from './Endors';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyForm />, document.getElementById('formj'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

