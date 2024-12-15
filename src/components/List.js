import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import _ from 'lodash';

class List extends Component {
  render() {
    let {items, search, sort} = this.props;
    let {orderBys, orderDir} = sort;
    let itemsBasic = (items !== null) ? [...items] : [];
    

    //SEARCH
    items = _.filter(itemsBasic, (item) => {
      return _.includes(item.name.toLowerCase(), search.toLowerCase());
    });

    // SORT 
    items = _.orderBy(items, [orderBys], [orderDir]);
    
    let elItems = <th colSpan={4} className="text-center"><td>Không có công việc</td></th>

    if(items.length > 0) {
      elItems = items.map((item, index) => {
        return (
          <Item 
            key={index} 
            item={item} 
            id={index}
          />
        )
      })
    }
    return (
        <div className="panel panel-success">
          <div className="panel-heading">List Task</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Task</th>
                <th style={{width: '20%'}} className="text-center">Level</th>
                <th style={{width: '20%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {elItems}
            </tbody>
          </table>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    search: state.search,
    sort: state.sort,
  }
  
}
export default connect(mapStateToProps, null)(List);
