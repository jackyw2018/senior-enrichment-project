import React from 'react';
import { connect } from 'react-redux';

import { deleteCampus } from '../reducers/campusesReducer';
import { getGPAFromStudents, studentsPerCampusId } from '../utils';

const Campus = ({ id, name, imageUrl, students, deleteCampus }) => {
  const onDeleteClick = () => {
    deleteCampus(id);
  };

  return (
    <div className="card" style={{ width: '45%', margin: '1rem' }}>
      <a
        href={`#/campuses/${id}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <img src={imageUrl} className="card-img-top" alt={name} />
      </a>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <a
          href={`#/campuses/${id}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <p className="card-text">{name}</p>
        </a>
        <p className="card-text">
          Students Enrolled: {students.length} | Average GPA:{' '}
          {getGPAFromStudents(students)}
        </p>
      </div>
      <button onClick={onDeleteClick} className="btn btn-outline-danger">
        Remove Campus
      </button>
    </div>
  );
};

const mapStateToProps = ({ students }, ownProps) => ({
  students: studentsPerCampusId(students, ownProps.id),
});

export default connect(
  mapStateToProps,
  { deleteCampus }
)(Campus);
