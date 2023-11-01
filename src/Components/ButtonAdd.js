import React from "react";
import styles from "./ButtonAdd.module.css";
import PropTypes from "prop-types";

function ButtonAdd({ big }) {
  const btnStyle = big ? [styles.btn, styles.btn_big].join(" ") : styles.btn;

  return <button className={btnStyle}>Подключить ВПН</button>;
}

ButtonAdd.propTypes = {
  big: PropTypes.bool,
};

export default ButtonAdd;
