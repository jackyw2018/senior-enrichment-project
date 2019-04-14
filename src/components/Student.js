import React from 'react';

const Student = ({ id, firstName, lastName, email, imageUrl, gpa }) => {
  return (
    <tr>
      <th scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {id}
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
        <i
          className="fas fa-times-circle text-danger"
          style={{ cursor: 'pointer' }}
        />
      </td>
    </tr>
  );
};

export default Student;
