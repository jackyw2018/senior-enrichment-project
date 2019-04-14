import React from 'react';

const Campus = ({ id, name, imageUrl }) => {
  return (
    <div className="card" style={{ width: '45%', margin: '1rem' }}>
      <a
        href={`#/campuses/${id}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body" style={{ textAlign: 'center' }}>
          <p className="card-text">{name}</p>
        </div>
      </a>
    </div>
  );
};

export default Campus;
