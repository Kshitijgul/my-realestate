import React from 'react';

const Link = ({ to, children, className, onClick }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export default Link;
