import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddForm extends Component {
  render() {
    const { campuses, students, match } = this.props;

    const output = { subject: '', };
    const inputFields = ;

    if (match.url === '/campuses/add') {
    } else if (match.url === '/students/add') {
      output.subject = 'Student';
    }

    return (
      <div>
        <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>
          Add {output.subject}
        </h1>
        <form>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter student name"
            />
          </div>
          <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="">Select Campus</option>
              {campuses.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
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

export default connect(mapStateToProps)(AddForm);
