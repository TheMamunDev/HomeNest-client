import React from 'react';

const Spinner = () => {
  return (
    <div className="max-w-11/12 mx-auto flex items-center justify-center min-h-screen">
      <span className="loading loading-ring  w-20 h-20 text-secondary"></span>
    </div>
  );
};

export default Spinner;
