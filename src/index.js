import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Login from './components/Login';
import registerServiceWorker from './components/registerServiceWorker';
import Menu from './components/Menu';
import Home from './components/Home';
import Sample from './components/sample';

ReactDOM.render(<Sample />, document.getElementById('root'));


registerServiceWorker();
