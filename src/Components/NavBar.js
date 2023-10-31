import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} />
      <button className={styles.btn}>Подключить ВПН</button>
    </nav>
  );
}

export default NavBar;
