import React from "react";

const Rating = ({ children }) => {
  let string = "";
  let fullStars = Math.round(children);
  let emptyStars = 5 - fullStars;

  for (let i = 0; i < fullStars; i++) {
    string += "★";
  }
  for (let i = 0; i < emptyStars; i++) {
    string += "☆";
  }
  return <p>{string}</p>;
};

export default Rating;
