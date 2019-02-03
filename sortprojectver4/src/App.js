import React, { Component } from 'react';
import SortPage from './sort-page/SortPage';

class App extends Component {
  render() {
    let fruits = [
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
    ]; 
    return (
      <div>
          <SortPage fruits={fruits}/>
      </div>
    );
  }
}

export default App;
