import { GetStaticProps, NextPage } from "next";
import styles from "../../styles/Header.module.css";
import Action from "../Actions";
import { baseUrl } from "./../../public/strings.json";

const Header: NextPage = (props: any) => {
    console.log("kkk",props);
    const {
        Logo,
        action
    } = props
    console.log(Logo,"jj");
    return (
        <nav className={styles.container}>
            <a className={styles.logo} href={"/"}>

                <img src={`${baseUrl}${Logo?.url}`} />
            </a>
            <div className={styles.navContainer}>
                {action.map((item: any) => (
                    <Action {...item} />
                ))}
            </div>
        </nav>
    )
}
export default Header
