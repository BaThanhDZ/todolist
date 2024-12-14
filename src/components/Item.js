import React, { Component } from 'react';
import items from '../mocks/Task';
import { connect } from 'react-redux';
import { actOpenForm } from '../action';

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(item) {
    // this.props.onclickEdit(item);
    this.props.editItem();
  }
  handleDelete(id) {
    this.props.onclickDelete(id);
  }
  setLevel(level) {
    let elLevel = <span className="label label-default">Small</span>;

    if(level === 1) {
      elLevel = <span className="label label-info">Medium</span>;
    }
    else if(level === 2) {
      elLevel = <span className="label label-danger">High</span>;
    }
    return elLevel;
  }
  render() {
    const item = this.props.item;
    const index = this.props.id;

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.name}</td>
          <td className="text-center">{this.setLevel(item.level)}</td>
            <td>
                <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
                <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    // isShowForm: state.isShowForm
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editItem: () => {
      dispatch(actOpenForm());
    }
  } 
}

export default connect(null, mapDispatchToProps)(Item);