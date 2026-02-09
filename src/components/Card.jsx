import React from 'react';

const Card = ({ children, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  );
};

export default Card;
