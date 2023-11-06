import React from "react";
import styles from "./Footer.module.css";
import PropTypes from "prop-types";

function Footer({ download }) {
  const socials = [
    { link: "#", class: styles.social_icon_twitter },
    { link: "#", class: styles.social_icon_linkedin },
    { link: "#", class: styles.social_icon_mail },
  ];

  const info = [
    { link: "https://getoutline.org/ru/how-it-works/", text: "Принцип работы" },
    { link: "https://getoutline.org/ru/get-started/", text: "Начало работы" },
    {
      link: "https://getoutline.org/ru/for-developers/",
      text: "Для разработчиков",
    },
    {
      link: "https://getoutline.org/ru/faq/",
      text: "Часто задаваемые вопросы",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="#hero" className={styles.logo}>
            <div className={styles.logo_img} />
          </a>
          <p>
            <b>Outline VPN</b> - ВПН, которому можно доверять.
          </p>
          <ul className={styles.social_list}>
            {socials.map((item) => (
              <li className={styles.social_item} key={item.class}>
                <a href={item.link} className={styles.social_link}>
                  <span
                    className={[styles.social_icon, item.class].join(" ")}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
          <p>© 2023 Outline VPN</p>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav_list}>
            <h3>Скачать Outline VPN</h3>
            <ul>
              {download.map((item) => (
                <li className={styles.nav_item} key={item.text}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.nav_link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={styles.nav_list}>
            <h3>Полезная информация</h3>
            <ul>
              {info.map((item) => (
                <li className={styles.nav_item} key={item.text}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.nav_link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  download: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Footer;
