

import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import styles from "../../styles/Card.module.css";
import strings from "./../../public/strings.json";
const { baseUrl } = strings;

const myLoader: ImageLoader = (url: any) => {
    return url;
}

const AssetCard: NextPage = ({ title, descrption, image: { name, url }, value }: any) => {

    return (
        <div className={styles.asset_card}>
            <div className={styles.title}>{title}</div>
            <Image loader={() => myLoader(baseUrl + url as any)} src={baseUrl + url} blurDataURL={baseUrl + url} placeholder="blur" width={80} height={80} />
            <div className={styles.content}>
                <div className={styles.value}>{value}</div>
                <div className={styles.descrption}>{descrption}</div>
            </div>
        </div>
    )
}
export default AssetCard
