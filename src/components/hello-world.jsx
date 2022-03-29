import React from 'react';

const HelloWorld = ({ name, color = "black" }) => {
  return <div className={`text-${color} h3`}>Hello {name}!!!</div>
}

export { HelloWorld };
