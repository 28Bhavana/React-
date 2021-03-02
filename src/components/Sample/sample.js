import React, { Component } from 'react';
import Sampleapi from './Sampleapi';

const url = "http://localhost:3000/menu"
class sample extends Component {

    constructor() {
        super()

        this.state = {
            title: 'Menu Page',
            menu: ''
        }
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    menu: data
                })
            })
    }

    render() {
        console.log(this.state.menu)
        return (
            <div>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <Sampleapi menuitems={this.state.menu} />
            </div>
        )
    }
}

export default sample;