import React from "react";
import "./Rate.css";
import "animate.css";
import PropTypes from "prop-types";

function Rate({ rate }) {
  return (
    <div className="rate">
      <div className="rate-top">
        <div className="image"></div>
        <h2>{rate.ratename}</h2>
        <ul>
          {rate.profits.map((profit) => (
            <li key={profit}>{profit}</li>
          ))}
        </ul>
      </div>
      <div className="rate_bottom">
        <h1>{rate.price}</h1>
      </div>
      <div className="abs">
        <h1 className="add">ПОДКЛЮЧИТЬ</h1>
      </div>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.object.isRequired,
};

export default Rate;
