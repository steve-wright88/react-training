import React from "react";

const Random = props => {
  let min = Math.ceil(props.min);
  let max = Math.floor(props.max);

  return <p> {Math.floor(Math.random() * (max - min)) + min}</p>;
};

export default Random;
