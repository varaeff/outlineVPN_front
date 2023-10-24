import React from "react";
import Feedback from "./Feedback";
import Rate from "./Rate";
import "./DataList.css";
import PropTypes from "prop-types";

function DataList({ data, component }) {
  return (
    <div className="datalist">
      {component === "Rate"
        ? data.map((rate) => <Rate rate={rate} key={rate.id} />)
        : data.map((feedback) => (
            <Feedback feedback={feedback} key={feedback.id} />
          ))}
    </div>
  );
}

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.string.isRequired,
};

export default DataList;
