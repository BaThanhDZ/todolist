import React, { Component } from 'react';

import Search from './Search';
import Filter from './Filter';
import ToggleForm from './ToggleForm'

class Control extends Component {
  
  render() {
    return (
        <div className="row">
          <Search/>
          <Filter/>
          <ToggleForm/>
        </div>
    );
  }
}

export default Control;
