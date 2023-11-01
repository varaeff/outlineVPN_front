import React from "react";
import ButtonAdd from "./ButtonAdd";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} />
      <ButtonAdd big={false} />
    </nav>
  );
}

export default NavBar;
