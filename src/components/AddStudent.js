import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postStudent } from '../reducers/studentsReducer';

class AddStudent extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
    gpa: '',
    campusId: '',
  };

  onInputChange = event => {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({ [field]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.postStudent(this.state);
  };

  render() {
    const { campuses } = this.props;

    const { firstName, lastName, email, imageUrl, gpa, campusId } = this.state;
    const { onInputChange, onFormSubmit } = this;
    return (
      <div>
        <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>Add Student</h1>
        <form onSubmit={onFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
                value={firstName}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
                value={lastName}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Enter image url"
              value={imageUrl}
              onChange={onInputChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="gpa">Enter GPA</label>
              <input
                type="text"
                className="form-control"
                id="gpa"
                placeholder="Enter GPA (0.0)"
                value={gpa}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="campus">Campus</label>
              <select
                className="form-control"
                id="campusId"
                onChange={onInputChange}
                value={campusId}
              >
                <option value="">Select Campus</option>
                {campuses.map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group" />
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
  postStudent: student => {
    dispatch(postStudent(student));
    ownProps.history.push('/');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudent);
