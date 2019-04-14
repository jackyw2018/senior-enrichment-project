import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Campus from './Campus';

const Campuses = props => {
  const { campuses } = props;
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
          <Campus key={id} id={id} name={name} imageUrl={imageUrl} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ campuses }) => ({
  campuses,
});

export default connect(mapStateToProps)(Campuses);
