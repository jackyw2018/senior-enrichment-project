import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Campus from './Campus';
import { studentsPerCampusId } from '../utils';

const Campuses = props => {
  const { campuses, students } = props;
  return (
    <Fragment>
      <div className="d-flex justify-content-end " style={{ padding: '1rem' }}>
        <a href="#/campuses/add">
          <i
            className="fas fa-plus text-primary"
            style={{ cursor: 'pointer', fontSize: '2rem' }}
          />
        </a>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ width: '100%' }}
      >
        {campuses.map(({ id, name, imageUrl }) => (
          <Campus
            key={id}
            id={id}
            name={name}
            students={studentsPerCampusId(students, id)}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ campuses, students }) => ({
  campuses,
  students,
});

export default connect(mapStateToProps)(Campuses);
