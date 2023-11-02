import React from "react";
import Modal from "./Modal/Modal";
import styles from "./NavBar.module.css";

function NavBar() {
  const links = [
    { text: "Преимущества", lnk: "#pluses" },
    { text: "Цены", lnk: "#prices" },
    { text: "Скачать ВПН", lnk: "#download" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo_smallres}></div>
      <nav className={styles.navbar}>
        <div className={styles.logo} />
        <ul className={styles.nav_list}>
          {links.map((item) => (
            <li className={styles.nav_item} key={item.text}>
              <a href={item.lnk} className={styles.nav_link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <Modal bigbtn={false} />
      </nav>
    </div>
  );
}

export default NavBar;
