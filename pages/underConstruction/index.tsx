import { NextPage } from "next";

import Styles from "../../styles/Section.module.css";
import Image, { ImageLoader } from "next/image";
import { underConstruction, underConstructionBlur } from "../../public/strings.json"

const myLoader: ImageLoader = () => {
  return underConstructionBlur;
}
const UnderConstruction: NextPage = (props: any) => {
  return (
    <div className={Styles.construction}>
      <div>
        <Image src={underConstruction} loader={myLoader} layout="fill" unoptimized/>
      </div>
    </div>
  );
};

export default UnderConstruction;