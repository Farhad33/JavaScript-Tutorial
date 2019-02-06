import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    onClick = () => {
        this.props.reRender(this.props.keys, this.props.operator);
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