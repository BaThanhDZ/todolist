import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSort } from '../action';

class Filter extends Component {
  
  handleSort = (orderBys, orderDir) => {
    this.props.sortItem(orderBys, orderDir);
  }
  render() {
    let {orderBys, orderDir}   = this.props.sort;
    let elSort = orderBys + "-" +  orderDir;
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sort by <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a onClick={() => this.handleSort('name', 'asc')} role="button">Name ASC</a></li>
                <li><a onClick={() => this.handleSort('name', 'desc')}role="button">Name DESC</a></li>
                <li role="separator" className="divider" />
                <li><a onClick={() => this.handleSort('level', 'asc')} role="button">Level ASC</a></li>
                <li><a onClick={() => this.handleSort('level', 'desc')} role="button">Level DESC</a></li>
              </ul>
              <span className="label label-success label-medium">{elSort}</span>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort: state.sort,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortItem: (orderBys, orderDir) => {
      dispatch(actSort(orderBys, orderDir));
    }
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
