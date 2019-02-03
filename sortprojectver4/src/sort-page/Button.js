import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    onClick = () => {
        console.log("yayayay");
    }

    render() {
        return (
            <button
                onClick={this.onClick}
            >
                {this.props.title}
            </button>
        );
    }
}

export default Button;