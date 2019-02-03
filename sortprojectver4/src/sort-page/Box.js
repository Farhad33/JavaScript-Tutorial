import React, { Component } from 'react';
import './box.css'

class Box extends Component {

    render() {
        return (
            <div className='fruit'>
                <h1>{this.props.fruit.name}</h1>
                <p>{this.props.fruit.quantity}</p>
            </div>
        );
    }
}

export default Box;