import React from "react";
import styles from "./ButtonAdd.module.css";
import PropTypes from "prop-types";

function ButtonAdd({ big, text, onClick }) {
  const btnStyle = big ? [styles.btn, styles.btn_big].join(" ") : styles.btn;

  return (
    <button className={btnStyle} onClick={onClick}>
      {text}
    </button>
  );
}

ButtonAdd.propTypes = {
  big: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonAdd;
