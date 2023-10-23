import React from "react";
import Rate from "./Rate";
import "./RatesList.css";

function RatesList(props) {
  return (
    <div className="rateslist">
      {props.rates.map((rate) => (
        <Rate rate={rate} key={rate.id} />
      ))}
    </div>
  );
}

export default RatesList;
