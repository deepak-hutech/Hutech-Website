import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import strings from "./../../public/strings.json";
import styles from "./mobapp.module.css";


const { baseUrl } = strings;
const myLoader: ImageLoader = (url: any) => {
  return url;
};

const Mobapp: NextPage = (props: any) => {
  const {
    image,
    title,
    para,
    points,
    points_part_two,
    media
  } = props;
  return (
    <div className={styles.mobapp}>

      <div className={styles.mobcontainer}>
        <h2>{title}</h2>
        <p>{para}</p>
        <div className={styles.points}>
          <div>{points}</div>
          <div>{points_part_two}</div>
        </div>

      </div>
      <div>
        <Image
          loader={() => myLoader((baseUrl + media[0].url) as any)}
          src={`${baseUrl}${media[0].url}`}
          placeholder="blur"
          blurDataURL={baseUrl + media[0].url}
          width={400}
          height={284}
        />
      </div>

      {/* <a
                    id={props.id}
                    href="/plans">
                    <img src={`${baseUrl}${url}`} alt={name} />
                    <h4>{title}</h4>
                    <h5>{descrption}</h5>
                </a> */}
    </div>
  );
};

export default Mobapp;
