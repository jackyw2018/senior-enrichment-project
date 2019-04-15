import React from 'react';

const NotFound = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Oops!</h1>
      <h1 style={{ textAlign: 'center' }}>404 Not Found</h1>
      <p style={{ textAlign: 'center' }}>
        Sorry, the requested page not found!
      </p>
      <a
        className="btn btn-outline-primary d-block"
        href="#/"
        style={{ margin: '1rem auto' }}
      >
        TAKE ME HOME!
      </a>
    </div>
  );
};

export default NotFound;
