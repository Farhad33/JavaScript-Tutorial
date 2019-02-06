import React, { Component } from 'react';
import Button from './Button';
import Boxes from './Boxes';
import SortFactory from '../utils';

class SortPage extends Component {
    constructor(props) {
        super(props)
        this.sort = new SortFactory();
        this.state = {
            'fruits': 
            [
                {'name': 'Banana', 'quantity': 8},
                {'name': 'Apple', 'quantity': 5},
                {'name': 'Orange', 'quantity': 7},
                {'name': 'Cherry', 'quantity': 20},
                {'name': 'Coconut', 'quantity': 2},
                {'name': 'Mango', 'quantity': 9},
                {'name': 'Lime', 'quantity': 1},
                {'name': 'Lemon', 'quantity': 0},
                {'name': 'Cucumber', 'quantity': 5},
                {'name': 'Strawberry', 'quantity': 4}
            ]
        }
    }

    reRender = (key, operator) => {
        const sortedFruits = this.sort.sortFruits(this.state.fruits, key, operator);
        this.setState({ 'fruits': sortedFruits })
    }

    render() {
        return (
            <div>
                <Button
                    reRender={this.reRender}
                    title={'Sort Name By Asc'}
                    keys={'name'}
                    operator={'Asc'}
                />
                <Button
                    reRender={this.reRender}
                    title={'Sort Name By Dsc'}
                    keys={'name'}
                    operator={'Dsc'}
                />
                <Button
                    reRender={this.reRender}
                    title={'Sort Quantity By Asc'}
                    keys={'quantity'}
                    operator={'Asc'}
                />
                <Button
                    reRender={this.reRender}
                    title={'Sort Quantity By Dsc'}
                    keys={'quantity'}
                    operator={'Dsc'}
                />
                <Boxes fruits={this.state.fruits} />
            </div>
        );
    }
}

export default SortPage;