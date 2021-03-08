import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';

import Sub from './components/Submenu/Submenu';
import './components/index.css';

ReactDOM.render(<Sub/>, document.getElementById('root'));

registerServiceWorker();
