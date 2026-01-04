import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Heading = ({ title, highlight, subtitle, showUser = false }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-4xl text-secondary font-extrabold primary-content md:text-5xl text-center mb-2">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      <p className="text-center text-base-300 mb-10 text-lg">
        {subtitle}{' '}
        {showUser && (
          <strong className="text-primary">**{user.displayName}**</strong>
        )}
      </p>
    </div>
  );
};

export default Heading;
