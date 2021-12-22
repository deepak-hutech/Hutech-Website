import { NextPage } from "next";
import styles from "../../styles/Header.module.css";
import { baseUrl } from "./../../public/strings.json";
import Link from "next/link";
import Image, { ImageLoader } from "next/image";
import subheadingIcon from "../assets/subheading.svg";

const myLoader = ({ src, width, quality }) => {
  const origin = typeof window !== "undefined" && window.location.origin;
  return `${origin}/${src}?w=${width}&q=${quality || 75}`;
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
        <a href={link} className={styles.topNavLink}>
          {display}
          <section className={styles.subMenuContainer}>
            {group.map(({ title, action }: any) => (
              <div className={styles.servicesubMenu}>
                <Image
                    loader={myLoader}
                    src={subheadingIcon}
                    className={styles.subheaderimg}
                    width={10}
                    height={10}
                  />
                <a href={title} className={styles.topNavLink}>
                  
                  
                  {title}
                </a>

                {/* {action?.map((action: any, index: number) => (
                  <a key={index} href={action.link ? action.link : "/"}>
                    {action.display}
                  </a>
                ))} */}
              </div>
            ))}
          </section>
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
