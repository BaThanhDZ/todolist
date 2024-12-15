import './App.css';

import React, { Component } from 'react';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Title from './components/Title';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Title/>

        <Control/>

        <Form/>

        <List/>
      </div>
    );
  }
}

export default App;
