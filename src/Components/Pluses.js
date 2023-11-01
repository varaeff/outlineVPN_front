import React from "react";
import styles from "./Pluses.module.css";

function Pluses() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Почему стоит выбрать Outline ВПН</h2>
        <p>
          Ваша конфиденциальность – главный приоритет Outline. Outline не
          отслеживает ваш трафик и не собирает данные о том, какие страницы вы
          посещаете.
        </p>
        <ul>
          <li>Надежное и стабильное подключение</li>
          <li>Не блокируется</li>
          <li>Работает на всех устройствах</li>
          <li>Быстрая настройка</li>
        </ul>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Pluses;
