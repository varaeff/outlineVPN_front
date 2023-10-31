import React from "react";
import "normalize.css";
import styles from "./App.module.css";
import NavBar from "./Components/NavBar";
import DataList from "./Components/DataList";
import Footer from "./Components/Footer";
import rates from "./Config/rates.json";
import feedbacks from "./Config/feedbacks.json";

function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <NavBar />
        <h2>Выберите ваш тариф</h2>
        <p>
          Оплата любой Российской или зарубежной банковской картой.
          <br />
          Для оплаты нужна только электронная почта.
        </p>
        <DataList data={rates} component="Rate" />
        <h2>
          Что говорят пользователи
          <br />
          про Outline ВПН
        </h2>
        <DataList data={feedbacks} component="Feedback" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
