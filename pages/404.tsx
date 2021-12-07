import { NextPage } from "next";

import Styles from "./../styles/Section.module.css";
import Image, { ImageLoader } from "next/image";

import { useRouter } from "next/router";
import Head from "next/head";
import { underConstruction, underConstructionBlur } from "./../public/strings.json";
const myLoader: ImageLoader = () => {
    return underConstructionBlur;
}

const UnderConstruction: NextPage = (props: any) => {
    console.log("40404040404040404")
    const router = useRouter();
    const title = router.asPath.split("/").join("_").substr(1);
    return (
        <div className={Styles.construction}>
            <h1>404</h1>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Image src={underConstruction} loader={myLoader} layout="fill" unoptimized/>
            </div>
        </div>
    );
};

export default UnderConstruction;