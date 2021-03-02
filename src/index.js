import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';
//import Menu from './components/Menu/Menu';
//import Home from './components/Home/Home';
// import Sample from './components/Sample/sample';
//import Login from './components/Login/Login';
//import Submenu from './components/Submenu/Submenu';
import Service from './components/Service';
import './index.css';

ReactDOM.render(<Service/>, document.getElementById('root'));

registerServiceWorker();
