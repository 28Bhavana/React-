import React from 'react';
import { Component } from 'react';


class Person extends Component{

    constructor(props)
    {
        super(props);
        
            this.state =
            { name: 'bhavana' , age: '34'

            };
        
    }

    render() {
    return ( 
        <div>
        <h1> Person is rendering in Submenu </h1>
        
        <p> {this.state.name} {this.state.age}</p>
        </div>
    );
}
}


export default Person;