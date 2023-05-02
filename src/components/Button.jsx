import React from 'react';

const Button = ({ onClick, children, show }) => (
  <button
    className={`p-4 fixed bottom-8 left-0 z-10 bg-black transition-all ${!show ? 'duration-500' : 'duration-200'} ${!show ? 'translate-x-0' : ' -translate-x-full'} ease-in-out`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
