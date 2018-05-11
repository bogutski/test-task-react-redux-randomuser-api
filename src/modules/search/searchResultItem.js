import React, { Component } from 'react';
import { formatPersonName } from './utils/utils';
import { SearchResultItemContact } from './searchResultItemContact';

class SearchResultItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openContacts: false
    };
  }

  render() {
    const { item } = this.props;
    return (
      <li className="text-left list-group-item">
        <img className="photo" src={item.picture.large} alt='Portrait'/>
        <span className="name lead">{formatPersonName(item.name.first, item.name.last)}</span>
        <span className="age lead">{new Date().getFullYear() - Number(item.dob.slice(0, 4))}</span>

        <span className="btn btn btn-primary btn-sm"
              onClick={() => this.setState({ openContacts: !this.state.openContacts })}>
          {!this.state.openContacts ? 'Show contacts' : 'Hide contacts'}
        </span>

        {this.state.openContacts && <SearchResultItemContact item={item}/>}
        
      </li>
    );
  }
}

export default SearchResultItem;
