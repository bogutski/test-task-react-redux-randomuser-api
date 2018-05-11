import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResultItem from "./searchResultItem";

class SearchResults extends Component {
  result(searchResults) {
    return (
      <div id="searchResults-">
        <h2>{searchResults.length} candidate{searchResults.length > 1 && 's'} found</h2>
        <ul className="list-group">
          {searchResults.map(item => <SearchResultItem key={item.registered} item={item}/>)}
        </ul>
      </div>
    );
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        {!searchResults.length ? <span>Loading ...</span> : this.result(searchResults)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
