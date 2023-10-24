import React from "react";
import "./Feedback.css";
import PropTypes from "prop-types";

function Feedback({ feedback }) {
  return (
    <div className="fdb">
      <div className="topstring">
        <img className="img" src={feedback.url} alt="avatar"></img>
        <div className="user">
          <b>{feedback.username}</b>
          <div className="rating">
            <b>{feedback.rating}</b>
            <img width={20} src="star.webp" alt="star" />
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
