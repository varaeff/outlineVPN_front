import React from "react";
import PropTypes from "prop-types";

import styles from "./Rate.module.css";

function Rate({ rate, setOpen }) {
  return (
    <div className={styles.rate} onClick={() => setOpen(true)}>
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
  setOpen: PropTypes.func.isRequired,
};

export default Rate;
