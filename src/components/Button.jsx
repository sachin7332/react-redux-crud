import React from 'react';

function Button() {
  const handleClick = () => {
    // Intentionally throwing an error when the button is clicked
    throw new Error('Error occurred when button clicked');
  };

  return (
    <div>
      <h2>Button</h2>
      <button onClick={handleClick}>Click Me to Throw Error</button>
    </div>
  );
}

export default Button;
