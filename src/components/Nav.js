import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul
      className="nav nav-pills justify-content-end"
      style={{ padding: '1rem 0' }}
    >
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/students" activeClassName="active">
          Students
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
