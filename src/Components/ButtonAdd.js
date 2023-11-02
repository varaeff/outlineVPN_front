import React from "react";
import styles from "./ButtonAdd.module.css";
import PropTypes from "prop-types";

function ButtonAdd({ big, text, clicking }) {
  const btnStyle = big ? [styles.btn, styles.btn_big].join(" ") : styles.btn;

  return (
    <button className={btnStyle} onClick={clicking}>
      {text}
    </button>
  );
}

ButtonAdd.propTypes = {
  big: PropTypes.bool,
  text: PropTypes.string.isRequired,
  clicking: PropTypes.func,
};

export default ButtonAdd;
