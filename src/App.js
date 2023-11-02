import React from "react";

import "normalize.css";
import styles from "./App.module.css";

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import DataList from "./Components/ListComponents/DataList";
import Footer from "./Components/Footer";
import Pluses from "./Components/Pluses";
import ButtonAdd from "./Components/ButtonAdd";

import rates from "./Config/rates.json";
import feedbacks from "./Config/feedbacks.json";

function App() {
  const devs = [styles.dev1, styles.dev2, styles.dev3, styles.dev4];

  return (
    <div>
      <div>
        <div className={styles.wrapper}>
          <NavBar />
          <Hero />
          <Pluses />
        </div>

        <div className={styles.wrapper_bkg}>
          <h2 id="prices">Выберите ваш тариф</h2>
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
              {devs.map((dev) => (
                <li className={dev} key={dev}></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={[styles.wrapper, styles.wrapper_bottom].join(" ")}>
          <h2>
            Что говорят пользователи
            <br />
            про Outline ВПН
          </h2>
          <DataList data={feedbacks} component="Feedback" />
          <div className={styles.container}>
            <div className={styles.left}>
              <h2>
                Подпишитесь на <br /> канал в телеграм
              </h2>
              <p>Не пропустите все самые важные обновления.</p>
            </div>
            <div className={styles.right}>
              <form action="https://t.me/outlinevpn_ru" target="_blank">
                <ButtonAdd big={true} text="Подписаться" />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
