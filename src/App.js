import React, { Component} from 'react';
import './App.css';
import Menu from './sample';
import Breadcrumb from './sample';

class First extends Component {
  render(){
     return (
       <div className="App">
         <h1> Welcome to website </h1>
        <div><button>   LOGIN </button> </div> 
         <Menu/>
       
       </div>
     );
   // return React.createElement('div', { className: 'App'},  React.createElement('h1', null, 'Does this work now' ));
    
  }
}
export default First;
