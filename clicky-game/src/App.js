import React, { Component } from 'react';
import Cards from "./components/Cards/Cards.js";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <Header>
        <Cards />
      </Header>
    );
  }
}

export default App;
