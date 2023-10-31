import React from "react";
import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

function Feedback({ feedback }) {
  return (
    <div className={styles.fdb}>
      <div className={styles.topstring}>
        {feedback.url ? (
          <img className={styles.img} src={feedback.url} alt="avatar"></img>
        ) : (
          <div />
        )}
        <div className={styles.user}>
          <b>{feedback.username}</b>
          <div className={styles.rating}>
            <b>{feedback.rating}</b>
          </div>
        </div>
      </div>
      <p>{feedback.text}</p>
    </div>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default Feedback;
