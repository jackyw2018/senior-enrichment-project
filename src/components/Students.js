import React from 'react';
import { connect } from 'react-redux';

import Student from './Student';
import { studentsWithCampusInfo } from '../utils';

const Students = props => {
  const { students } = props;
  return (
    <div>
      <div className="d-flex justify-content-end " style={{ padding: '1rem' }}>
        <a href="#/students/add">
          <i
            className="fas fa-plus text-primary"
            style={{ cursor: 'pointer', fontSize: '2rem' }}
          />
        </a>
      </div>
      <table className="table table-borderless table-hover">
        <thead className="thead-dark">
          <tr>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              #
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              Full Name
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              Email Address
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              Profile Picture
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              GPA
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              Edit{' '}
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
              Remove{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <Student
              {...student}
              idx={idx}
              key={student.id}
              history={props.history}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ students, campuses }) => ({
  students: studentsWithCampusInfo(students, campuses),
});

export default connect(mapStateToProps)(Students);
