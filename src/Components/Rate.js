import React from "react";
import "./Rate.css";
import PropTypes from "prop-types";

function Rate({ rate }) {
  return (
    <div className="rate">
      <div className="image"></div>
      <h2>{rate.ratename}</h2>
      <ul>
        {rate.profits.map((profit) => (
          <li key={profit}>{profit}</li>
        ))}
      </ul>
      <h1>{rate.price}</h1>
      <button className="btn">Подключить</button>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.object.isRequired,
};

export default Rate;
