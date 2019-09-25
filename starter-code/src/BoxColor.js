import React from "react";

const BoxColor = props => {
  let style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` // what's the dolor sign doing here?
  };
  return (
    <div className="box" style={style}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default BoxColor;
