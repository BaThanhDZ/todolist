import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSearch } from '../action';
import search from '../reducers/search';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",

    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSearch() {
    this.props.onClickSearch(this.state.searchValue);
  }
  handleClear() {
    this.setState({searchValue: ""});
    this.props.onClickClearSearch("")

  }
  handleChange(index) {
    this.setState({searchValue: index.target.value})
  }
  render() {
    let searchValue = (this.state.searchValue !== "") ? this.state.searchValue : this.props.search;
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
            <input value={searchValue} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
                <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
                <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear!</button>
            </span>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search,
  } 
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickSearch: (search) => {
      dispatch(actSearch(search))
    },
    onClickClearSearch: () => {
      dispatch(actSearch(""))
    }
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);