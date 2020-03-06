import React from 'react';

const Square = (props) => {
    return (
      <button style={styling}
      className="square"
      onClick={() => props.onClick()} >
      {props.value}
    </button>
    )
  };

  const styling = {
      borderColor: 'darkgoldenrod',
      width: '50px',
      height: '50px',
  };

  export default Square;