import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const socials = [
    { link: "#", class: styles.social_icon_twitter },
    { link: "#", class: styles.social_icon_linkedin },
    { link: "#", class: styles.social_icon_mail },
  ];

  const info = [
    { link: "#", text: "OutlineVPN" },
    { link: "#", text: "FAQ" },
    { link: "#", text: "Tutorials" },
    { link: "#", text: "About Us" },
    { link: "https://travelvpn.net/privacy.html", text: "Privacy Policy" },
    { link: "https://travelvpn.net/terms.html", text: "Terms of Service" },
  ];

  const download = [
    {
      link: "https://apps.apple.com/ru/app/outline-app/id1356177741",
      text: "На iPhone",
    },
    {
      link: "https://play.google.com/store/apps/details?id=org.outline.android.client",
      text: "На Android",
    },
    {
      link: "https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe",
      text: "На Windows",
    },
    {
      link: "https://s3.amazonaws.com/outline-releases/client/linux/stable/Outline-Client.AppImage",
      text: "На Linux",
    },
    {
      link: "https://apps.apple.com/us/app/outline-secure-internet-access/id1356178125?mt=12",
      text: "На Mac",
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
            <ul id="download">
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

export default Footer;
