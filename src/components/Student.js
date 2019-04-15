import React from 'react';
import { connect } from 'react-redux';

import { deleteStudent } from '../reducers/studentsReducer';

const Student = ({
  id,
  firstName,
  lastName,
  email,
  imageUrl,
  gpa,
  idx,
  deleteStudent,
}) => {
  return (
    <tr>
      <th scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {idx + 1}
      </th>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <a href={`#/students/${id}`} style={{ textDecoration: 'none' }}>
          {firstName} {lastName}
        </a>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{email}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <img src={imageUrl} style={{ height: '4rem' }} />
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {Number(gpa).toFixed(1)}
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <a href={`#/students/${id}/edit`}>
          <i
            className="fas fa-edit text-primary"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              console.log('clicked');
            }}
          />
        </a>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <i
          className="fas fa-times-circle text-danger"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            deleteStudent(id);
          }}
        />
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteStudent: id => {
    dispatch(deleteStudent(id));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Student);
