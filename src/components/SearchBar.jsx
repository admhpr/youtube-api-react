import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="form-control"
          value={this.state.term}
          onChange={event => this.handleOnChange(event.target.value)}
          placeholder="Search Youtube..."
        />
      </div>
    );
  }
  handleOnChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
