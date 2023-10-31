import React from "react";
import styles from "./Rate.module.css";
import PropTypes from "prop-types";

function Rate({ rate }) {
  return (
    <div className={styles.rate}>
      <div>
        <div className={styles.image}></div>
        <h2>{rate.ratename}</h2>
        <ul>
          {rate.profits.map((profit) => (
            <li key={profit}>{profit}</li>
          ))}
        </ul>
      </div>
      <div className={styles.rate_bottom}>
        <h1>{rate.price}</h1>
      </div>
      <div className={styles.abs}>
        <h1 className={styles.add}>ПОДКЛЮЧИТЬ</h1>
      </div>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.object.isRequired,
};

export default Rate;
