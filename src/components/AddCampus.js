import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postCampus } from '../reducers/campusesReducer';

class AddCampus extends Component {
  state = {
    name: '',
    imageUrl: '',
    address: '',
    description: '',
  };

  onInputChange = event => {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({ [field]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.postCampus(this.state);
  };

  render() {
    const { name, imageUrl, address, description } = this.state;
    const { onFormSubmit, onInputChange } = this;

    return (
      <div>
        <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>Add Campus</h1>
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter campus name"
              onChange={onInputChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Enter imageUrl"
              onChange={onInputChange}
              value={imageUrl}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
              value={address}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
              value={description}
              onChange={onInputChange}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ campuses, students }) => ({
  campuses,
  students,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postCampus: campus => {
    dispatch(postCampus(campus));
    ownProps.history.push('/');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCampus);
