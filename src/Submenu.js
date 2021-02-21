import React, { Component } from 'react';
import './Menu.css';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }
    render() {
        return (
            <div>
               Hi, I AM HERE !
                   
                <h1> My fav color is {this.state.color}</h1>
            </div>);
    }

}

export default Menu;