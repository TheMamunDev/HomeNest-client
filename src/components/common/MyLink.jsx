import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `baseNavClass ${
          isActive ? `${className} border-b-2 border-primary` : ''
        } px-3 py-2`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
