import React from "react";
import "./NumbersTable.css";

const NumbersTable = props => {
  let arr = [];
  let number = props.limit;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      arr.push(<section style={{ backgroundColor: "red" }}>{i}</section>);
    } else {
      arr.push(<section style={{ backgroundColor: "white" }}>{i}</section>);
    }
  }
  return <div class="oddEven">{arr}</div>;
};

export default NumbersTable;
