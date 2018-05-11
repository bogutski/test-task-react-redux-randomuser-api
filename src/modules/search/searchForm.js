import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchByCriteria } from './_actions/searchActions';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageMin: 18,
      ageMax: 30,
      gender: 'any'
    };

    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  submitFormHandler(e) {
    e.preventDefault();
    this.props.searchByCriteria(this.state, 100);
  }

  resetHandler(e) {
    e.preventDefault();

    const initialState = {
      ageMin: 18,
      ageMax: 30,
      gender: 'any'
    };

    this.setState(initialState);
    this.props.searchByCriteria(initialState, 10);
  }

  componentDidMount() {
    this.props.searchByCriteria(this.state, 10);
  }

  render() {
    return (
      <div id="userPreferences">
        <h2>Search Criteria</h2>
        <form className="form" onSubmit={this.submitFormHandler}>
          <div className="form-group">
            <label className="control-label mr-2">Age</label>
            <input type="text"
                   name="ageMin"
                   value={this.state.ageMin}
                   onChange={(e) => this.setState({ ageMin: e.target.value })}/>
            <span className="ml-2 mr-2">to</span>
            <input type="text"
                   name="ageMax" value={this.state.ageMax}
                   onChange={(e) => this.setState({ ageMax: e.target.value })}/>
          </div>

          <div className="form-group">
            <label className="control-label mr-2">Gender</label>

            <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="gender"
                     value='any'
                     checked={this.state.gender === 'any'}
                     onChange={this.onChangeGender}/>
              <label className="form-check-label">Any</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="gender"
                     value='male'
                     checked={this.state.gender === 'male'}
                     onChange={this.onChangeGender}/>
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="gender"
                     value='female'
                     checked={this.state.gender === 'female'}
                     onChange={this.onChangeGender}/>
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <button type="button" className="btn btn-default" onClick={this.resetHandler}>Reset</button>
          <button type="submit" className="btn btn-primary">Filter</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  searchByCriteria: (form, limit) => dispatch(searchByCriteria(form, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
