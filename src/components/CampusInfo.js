import React from 'react';
import { connect } from 'react-redux';

import { studentsPerCampusId } from '../utils';

const CampusInfo = props => {
  const { students, campus } = props;
  if (!students.length) return null;
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>
        {campus.name} Campus
      </h1>
      <div className="card bg-dark text-white" style={{ width: '100%' }}>
        <img className="card-img" src={campus.imageUrl} alt="Card image cap" />
        <div className="card-img-overlay">
          <h5 className="card-title">{campus.name}</h5>
          <p className="card-text">{campus.description}</p>
        </div>
      </div>
      <ul className="list-group" style={{ marginTop: '1rem' }}>
        <li className="list-group-item active">Students</li>
        {students.map(({ id, firstName, lastName }, idx) => (
          <li key={id} className="list-group-item">
            {idx + 1}. {firstName} {lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ students, campuses }, ownProps) => ({
  students: studentsPerCampusId(students, Number(ownProps.match.params.id)),
  campus: campuses.find(campus => campus.id == ownProps.match.params.id),
});

export default connect(mapStateToProps)(CampusInfo);
