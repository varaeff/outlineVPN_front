import React from "react";

import "normalize.css";
import styles from "./App.module.css";

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import DataList from "./Components/DataList";
import Footer from "./Components/Footer";
import Pluses from "./Components/Pluses";

import rates from "./Config/rates.json";
import feedbacks from "./Config/feedbacks.json";

function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <NavBar />
        <Hero />
        <Pluses />
        <h2>Выберите ваш тариф</h2>
        <p>
          Оплата любой Российской или зарубежной банковской картой.
          <br />
          Для оплаты нужна только электронная почта.
        </p>
        <DataList data={rates} component="Rate" />

        <h2>
          Сверхбыстрые <br /> серверы <br /> в 30 странах
        </h2>
        <p>
          Выбирайте ближайшую к себе локацию для <br /> скрости или конкретную
          страну.
        </p>
        <div className={styles.worldmap}></div>

        <div className={styles.toleft}>
          <h2>Outline VPN на любых устройствах</h2>
        </div>
        <div className={styles.devcontainer}>
          <ul className={styles.devices}>
            <li className={styles.dev1}></li>
            <li className={styles.dev2}></li>
            <li className={styles.dev3}></li>
            <li className={styles.dev4}></li>
          </ul>
        </div>

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
