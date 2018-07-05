

import React, { Component } from 'react';
import Author from './Author';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let name = "vincent"
    return (
        <div className ="App">
            <Author name = { name } />
        </div>
    );
};
};

export default App;

