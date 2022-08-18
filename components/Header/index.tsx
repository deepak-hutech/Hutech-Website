import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import Action from "../Actions";
import strings from "./../../public/strings.json";

const { baseUrl } = strings;

const Header: NextPage = (props: any) => {
  const { Logo, action } = props;

  const [onScrollBackground, setOnScrollBackground] = useState(false);
  const changeBackgroundColor = () => {
    if (window.pageYOffset > 50) {
      setOnScrollBackground(true);
    } else {
      setOnScrollBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [changeBackgroundColor]);

  return (
    <nav
      className={`${styles.container} ${
        onScrollBackground ? styles.onScrollBackground : ""
      }`}
    >
      <div className={styles.innerContainer}>
        <a className={styles.logo} href={"/"}>
          <img src={`${baseUrl}${Logo?.url}`} />
        </a>
        <div className={styles.menuToggle}>
          <input type="checkbox" className={styles.hamburgerCheckbox} />
          <span className={styles.hamburgerMenuIcon}></span>
          <span className={styles.hamburgerMenuIcon}></span>
          <span className={styles.hamburgerMenuIcon}></span>
          <div className={styles.navContainer}>
            {action && action.map((item: any) => (
              <Action {...item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
    /* <header className={styles.header}>
    <a className={styles.logo} href={"/"}>
        <img src={`${baseUrl}${Logo?.url}`} />
      </a>
    
    <input className={styles.menu_btn} type="checkbox" id="menu_btn" />
    <label className={styles.menu_icon} htmlFor="menu_btn"><span className={styles.navicon}></span></label>
    <div className={styles.menu}>
    
      <div className={styles.navContainer}>
        {action.map((item: any) => (
          <Action {...item} />
        ))}
      </div>
    </div>
  </header> */
  );
};
export default Header;
