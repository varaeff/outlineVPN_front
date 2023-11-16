import React from "react";
import PropTypes from "prop-types";

import ButtonAdd from "./ButtonAdd";

import styles from "./NavBar.module.css";

function NavBar({ setOpen }) {
  const links = [
    { text: "Преимущества", lnk: "#pluses" },
    { text: "Цены", lnk: "#prices" },
    { text: "Скачать", lnk: "#download" },
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
        <ButtonAdd
          big={false}
          text="Подключить&nbsp;ВПН"
          onClick={() => setOpen(true)}
        />
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default NavBar;
