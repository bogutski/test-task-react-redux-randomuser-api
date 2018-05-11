import React, { Component } from 'react';
import SearchForm from './searchForm';
import SearchResults from './searchResults';

class Search extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand">Random  User API</span>
        </nav>

        <div className="container text-center">
          <SearchForm/>
          <SearchResults/>
        </div>
      </div>
    );
  }
}

export default Search;
