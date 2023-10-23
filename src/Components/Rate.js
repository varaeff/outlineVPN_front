import React from "react";
import "./Rate.css";

function Rate(props) {
  return (
    <div className="rate">
      <div className="image"></div>
      <h2>{props.rate.ratename}</h2>
      <ul>
        {props.rate.profits.map((profit) => (
          <li key={profit}>{profit}</li>
        ))}
      </ul>
      <h1>{props.rate.price}</h1>
      <button>Подключить</button>
    </div>
  );
}

export default Rate;
