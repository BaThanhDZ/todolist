import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actCloseForm } from '../action/index';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task_id: '',
      task_name: '',
      task_level: 0,
    }
  }
  // --------
  componentWillMount() {
    // let item = this.props.itemsSelected;
    // if(item.id !== "") {
    //   this.setState({
    //     task_id: item.id,
    //     task_name: item.name,
    //     task_level: item.level,
    //   })
    // }
    this.updateItem(this.props.itemsSelected)
  }
  componentWillReceiveProps(nextProps) {
    // let item = nextProps.itemsSelected;
    // if(item.id !== "") {
    //   this.setState({
    //     task_id: item.id,
    //     task_name: item.name,
    //     task_level: item.level,
    //   })
    // }
    this.updateItem(nextProps.itemsSelected)
  }

  updateItem(item) {
    if(item.id !== "") {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level,
      })
    }
  }
  // phần comment có thể dc thay thế như trên
  // ------
  handleChange = (event) => {
    const target = event.target;  //input selectbox
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (event) => {
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level,
    }
    this.props.onClickSubmit(item);
    event.preventDefault();
  }
  handleCancel = () => {
    this.props.cancelForm();
  }
  render() {
    let {isShowForm} = this.props;
    if(isShowForm === false) return null;

    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form onSubmit={this.handleSubmit} className="form-inline">

            <div className="form-group">
              <label className="sr-only" htmlFor="task_name">label</label>
              <input onChange={this.handleChange} value={this.state.task_name} name="task_name" type="text" className="form-control" placeholder="Task Name" />
            </div>

            <div className="form-group">
              <label className="sr-only" htmlFor="task_level">label</label>
              <select onChange={this.handleChange} value={this.state.task_level} name="task_level" className="form-control" required="required">
                Small
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
          </form>
        </div>
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
    cancelForm: () => {
      dispatch(actCloseForm());
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);