import React, { Component } from 'react';

import Search from './Search';
import Filter from './Filter';
import ToggleForm from './ToggleForm'

class Control extends Component {
  
  render() {
    let {orderBys}   = this.props;
    let {orderDir}  = this.props;
    return (
        <div className="row">
          <Search/>
          <Filter
            orderBys={orderBys}
            orderDir={orderDir}
            onClickSort={this.props.onClickSort}
          />
          <ToggleForm/>
        </div>
    );
  }
}

export default Control;
