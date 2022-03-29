import React from 'react';

export const HelloWorld = ({ name, color = "black" }) => {
  return <div className={`text-${color}`}>Hello {name}</div>
}

export default HelloWorld;
