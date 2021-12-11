import React, { useState, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import styles from "../../styles/Header.module.css";
import Action from "../Actions";
import { baseUrl } from "./../../public/strings.json";

// interface IBackground {
//   color: string;
// }

const Header: NextPage = (props: any) => {
  const { Logo, action } = props;

  const [backgroundColor, setBackgroundColor] = useState("");
  const changeBackgroundColor = () => {
    if (window.pageYOffset > 50) {
      setBackgroundColor("#ffffff");
    } else {
      setBackgroundColor("");
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
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <a className={styles.logo} href={"/"}>
        <img src={`${baseUrl}${Logo?.url}`} />
      </a>
      <div className={styles.navContainer}>
        {action.map((item: any) => (
          <Action {...item} />
        ))}
      </div>
    </nav>
  );
};
export default Header;
