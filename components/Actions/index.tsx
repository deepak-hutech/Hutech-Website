import { NextPage } from "next";

import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import subheadingIcon from "../assets/subheading.svg";
import submenuIcon from "../assets/submenuicon.svg";
import strings from "./../../public/strings.json";
const { baseUrl } = strings;

const myLoader = ({ src, width, quality }: any) => {
  const origin = typeof window !== "undefined" && window.location.origin;
  return `${origin}${src}?w=${width}&q=${quality || 75}`;
};
const Action: NextPage = ({
  type,
  display,
  link,
  group,
  icon,
  sublink,
}: any) => {
  switch (type) {
    case "hyperlink":
      return (
        <a href={link} className={styles.topNavLink}>
          {display}
        </a>
        /* <ul className={styles.menu}>
          <li  className={styles.topNavLink}>
        {display}
      </li>
        </ul> */
      );
    case "dropdown":
      return (
        <a href={link} className={styles.topsubmenuLink}>
          {display}

          <section className={styles.subMenuContainer}>
            {group.map(({ title, link, action }: any) => (
              <div className={styles.servicesubMenu}>
                <div className={styles.imageWrapper}>
                  <Image
                    loader={myLoader}
                    src={subheadingIcon}
                    className={styles.subheaderimg}
                    width={2}
                    height={2}
                    objectFit="contain"
                  />
                </div>

                <div className={styles.suheadercontener}>
                  <a href={link} className={styles.topsubmenuLink}>
                    {title}
                  </a>
                </div>

                {/* {action?.map((action: any, index: number) => (
                  <a key={index} href={action.link ? action.link : "/"}>
                    {title}
                  </a>
                ))} */}
              </div>
            ))}
          </section>
          <Image
            loader={myLoader}
            src={submenuIcon}
            alt="Picture of the author"
            width={30}
            height={17}
          />
        </a>
      );
    case "call_to_action":
      return (
        <Link href="/contact-us" passHref>
          <button className={styles.headerbtn}>
            <p style={{ margin: "0" }}>
              {display}
              {/* <img src={`${baseUrl}${icon[0].url}`} alt="" height="21px" width="24px" /> */}
            </p>
          </button>
        </Link>
      );
    // case "call_to_action_image": return (<img src={`${baseUrl}${icon.url}`} height="50px" width="50px" />);
    default:
      return <div>default</div>;
  }
};
export default Action;
