import React from 'react';
import { connect } from 'react-redux';

import { findStudentById } from '../utils';

const StudentInfo = ({ student }) => {
  const { firstName, lastName, email, imageUrl, gpa } = student;
  return (
    <div className="card mb-3" style={{ margin: '1rem auto' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imageUrl} className="card-img" alt={firstName} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {firstName} {lastName}
            </h5>
            <p className="card-text">Email Address: {email}</p>
            <p className="card-text">
              <small className="text-muted">GPA: {gpa}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ students }, ownProps) => ({
  student: findStudentById(students, Number(ownProps.match.params.id)),
});

export default connect(mapStateToProps)(StudentInfo);
