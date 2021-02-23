import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import registerServiceWorker from './components/registerServiceWorker';
import Menu from './components/Menu';
import Home from './components/Home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
