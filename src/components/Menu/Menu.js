import React, { Component } from 'react';
import '../components/Menu.css';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }
    render() {
        return (
            <div>
                <nav aria-label="Breadcrum">
                    <ol class="Breadcrum">
                        <li class="Breadcrum-item active"><a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Menu 1</a></li>
                        <li class="Breadcrum-item active"><a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Menu 2</a></li>
                        <li class="Breadcrum-item active "><a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Menu 3</a></li>
                    </ol> </nav>
                <h1> My fav color is {this.state.color}</h1>
            </div>);
    }

}

export default Menu;