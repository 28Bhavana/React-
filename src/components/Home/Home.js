import React, { Component } from 'react';
import './components/Home.css';
import dom from '../dom.png';

class Home extends Component {
    render() {
        return (
            <div className='topnav'>
                <img id="dom" src={dom}></img>
                <a href="orderonline">Order Online</a>
                <a href="menu">Menu</a>
                <a href="coupons">Coupons</a>
                <a href="tracker">Tracker</a>
                <a href="rewards">Rewards</a>
            </div>

        );

    }
}
export default Home;
