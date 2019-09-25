import React from "react";

const IdCard = props => {
  return (
    <div className="IdContainer">
      <img src={props.picture} alt="profilepicture" />
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth:</p>{" "}
      {new Intl.DateTimeFormat("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(props.birth)}
      {/* <p>Birth: {props.birth.toLocaleDateString}</p> */}
    </div>
  );
};

export default IdCard;
