import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar-text"
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
         />
      </div>
    );
  }

}

export default SearchBar;
