import React, { Component } from 'react';
import Box from './Box';
import './boxes.css';

class Boxes extends Component {

    render() {
        return (
            <div className='fruits'>
                {this.props.fruits.map(fruit => (
                    <Box
                        key={Math.random()}
                        fruit={fruit}
                    />
                ))}
            </div>
        );
    }
}

export default Boxes;