import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import React, { useState } from "react";
import styles from "../Accordian/accordian.module.css";
import strings from "./../../public/strings.json";

const { baseUrl } = strings;
const myLoader: ImageLoader = (url: any) => {
  return url;
};
const Accordian: NextPage = (props: any) => {
  const [isActive, setIsActive] = useState(false);
  const {
    image,
    title,
    descrption,
    free_text,
    type,
    link,
    index,
    call_to_action,
    content,
  } = props;

  return (
    <div className={styles.accordion_box}>
      <div className={styles.accordion_item}>
        <div
          className={styles.accordion_title}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.accordion_heading}>{title}</div>
          <div className={styles.accordion_symbol}>
            {isActive ? "-" : "+"}
          </div>
        </div>

        {isActive && (
          <div className={styles.accordion_body}>
            <div className={styles.accordion_content}>
              <span>{free_text}</span>
              <button className={styles.accord_btn}>
                <p>{call_to_action}</p>
              </button>
            </div>
            <div className={styles.accordion_image}>
              <Image
                loader={() => myLoader((baseUrl + image[0].url) as any)}
                src={`${baseUrl}${image[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + image[0].url}
                width={482}
                height={356}
                className={styles.cardimg}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
