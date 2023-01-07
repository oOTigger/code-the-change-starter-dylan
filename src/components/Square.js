import React from "react";

const Square = ({value, onClick}) => {
  const letter = value === "X" ? "square x" : "square o";

  return (
  <button className= {letter} onClick={onClick}>
    {value}
  </button>    
  );
};


export default Square;
