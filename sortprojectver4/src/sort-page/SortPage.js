import React, { Component } from 'react';
import Button from './Button';
import Boxes from './Boxes';

class SortPage extends Component {

    render() {
        return (
            <div>
                <Button
                    title={'Sort Name By Asc'} />
                <Button
                    title={'Sort Name By Dsc'} />
                <Button
                    title={'Sort Quantity By Asc'} />
                <Button
                    title={'Sort Quantity By Dsc'} />
                <Boxes fruits={this.props.fruits} />
            </div>
        );
    }
}

export default SortPage;