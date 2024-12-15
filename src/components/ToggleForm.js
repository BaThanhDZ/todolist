import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actToggleForm, actUnSelect } from '../action/index';

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleForm();
  }
  render() {
    const {isShowForm} = this.props;
    let btnName = (isShowForm === true) ? "Close Task" : "Add Task";
    let btnClass = (isShowForm === true) ? "btn-danger" : "btn-success";
    
    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button onClick={this.handleToggle} type="button" className={`btn btn-block ${btnClass}`}>{btnName}</button>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShowForm: state.isShowForm
  } 
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleForm: () => {
      dispatch(actToggleForm());
      dispatch(actUnSelect())
    }
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Toggle);