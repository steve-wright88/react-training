import React from "react";
import visa from "./img/visa.png";
import mcard from "./img/master-card.svg";

const lastFourDigits = num => {
  let hiddenNum = "•••• •••• •••• ";
  let stringNum = num.toString();

  return (
    hiddenNum + stringNum.substring(stringNum.length - 4, stringNum.length)
  );
};

const CreditCard = props => {
  let cardImg = {
    Visa: visa,
    "Master Card": mcard
  };

  let style = {
    backgroundColor: props.bgColor,
    color: props.color
  };

  return (
    <div className="CreditCardContainer" style={style}>
      <img src={cardImg[props.type]} alt="cardimg" />
      <h1>{lastFourDigits(props.number)}</h1>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
