import React from "react";
import Rating from "./Rating";

const DriverCard = props => {
  return (
    <div className="driverCardContainer">
      <img src={props.img} alt="driver" />
      <h1>{props.name}</h1>
      <Rating>{props.rating}</Rating>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
