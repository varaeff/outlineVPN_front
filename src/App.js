import React from "react";
import "./App.css";
import DataList from "./Components/DataList";
import rates from "./Config/rates.json";
import feedbacks from "./Config/feedbacks.json";

function App() {
  return (
    <div className="wrapper">
      <DataList data={rates} component="Rate" />
      <hr />
      <br />
      <DataList data={feedbacks} component="Feedback" />
    </div>
  );
}

export default App;
