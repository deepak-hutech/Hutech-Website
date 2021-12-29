import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import strings from "../../public/strings.json";
import Styles from "../../styles/Section.module.css";

const { underConstruction, underConstructionBlur } = strings;
const myLoader: ImageLoader = () => {
  return underConstructionBlur;
}
const UnderConstruction: NextPage = (props: any) => {
  return (
    <div className={Styles.construction}>
      <div>
        <Image src={underConstruction} loader={myLoader} layout="fill" unoptimized />
      </div>
    </div>
  );
};

export default UnderConstruction;