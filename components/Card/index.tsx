import marked from "marked";
import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import styles from "../../styles/Card.module.css";
import companyStyles from "../../styles/Company.module.css";

import Action from "../Actions";
import { baseUrl } from "./../../public/strings.json";
import leftarrow from "../assets/arrow.png";


const myLoader: ImageLoader = (url: any) => {
  return url;
};

const Card: NextPage = (props: any) => {
  const {
    images,
    heading,
    free_text,
    para,
    on_image_text,
    card_free_text,
    actions,
    type,
    link,
    image_one_title,
    call_to_action,
    arrow,
    image_one,
  } = props;

  switch (type) {
    case "small_card":
      return (
        <div>
        <div className={styles.card}>
          <a
            id={props.id}
            // href={link ? link : `/plans/${props.title.split(" ").join("_")}`}>>
          >
            <Image
              loader={() => myLoader((baseUrl + images[0].url) as any)}
              src={`${baseUrl}${images[0].url}`}
              placeholder="blur"
              blurDataURL={baseUrl + images[0].url}
              width={372}
              height={277}
            />
          </a>
         
        </div>
        <div className={styles.heading}>{heading}</div>
        </div>
      );
    case "capabilities_cards":
      return (
        <div className={styles.capabilities_cards}>
         
            <div className={styles.capabilities}>
              {/* <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={55}
                height={55}
                className={styles.cardimg}
              /> */}

              {/* <button>
                <p>{call_to_action}</p>
              </button> */}
            </div>
            <p className={styles.para}>{free_text}</p>
          
        </div>
      );
      case "successful_product_card":
      return (
        <div className={styles.capabilities_cards}>
         
            <div className={styles.capabilities}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={55}
                height={55}
                className={styles.cardimg}
              />
            </div>
            <p className={styles.heading}>{heading}</p>
            <p className={styles.para}>{free_text}</p>
           
          
        </div>
      );
      case "clients_card":
      return (
        <div className={styles.capabilities_cards}>
         
            <div className={styles.capabilities}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={100}
                height={100}
                className={styles.cardimg}
              />

            </div>
          
        </div>
      );
    // case "wide_card":
    //   return (
    //     <div className={styles.blog}>
    //       <div
    //         className={styles.wide_card}
    //         style={{
    //           backgroundImage: `url(${baseUrl}${image[0].url})`,
    //           backgroundPosition: "center",
    //           backgroundSize: "cover",
    //           backgroundRepeat: "no-repeat",
    //           borderRadius: "10px 0 0 10px",
    //         }}
    //       ></div>
    //       <div className={styles.card_contant}>
    //         <div className={styles.heading}>{title}</div>
    //         <p className={styles.para}>{on_image_text}</p>
    //         <hr style={{ border: " 1px solid #DCDCDC" }} />
    //         <div style={{ textAlign: "end", padding: "10px 30px" }}>
    //           <Image
    //             loader={() => myLoader((baseUrl + arrow[0].url) as any)}
    //             src={`${baseUrl}${arrow[0].url}`}
    //             placeholder="blur"
    //             blurDataURL={baseUrl + arrow[0].url}
    //             width={15}
    //             height={15}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   );
    // case "service_card":
    //   return (
    //     <div>
    //       <div className={styles.servicecard}>
    //         <div>
    //           <Image
    //             loader={() => myLoader((baseUrl + image_one[0].url) as any)}
    //             src={`${baseUrl}${image_one[0].url}`}
    //             placeholder="blur"
    //             blurDataURL={baseUrl + image_one[0].url}
    //             width={40}
    //             height={40}
    //           />
    //           <p>{image_one_title}</p>
    //         </div>
    //       </div>
    //       <div className={styles.servicecard}>
    //         <div>
    //           <Image
    //             loader={() => myLoader((baseUrl + image_one[0].url) as any)}
    //             src={`${baseUrl}${image_one[0].url}`}
    //             placeholder="blur"
    //             blurDataURL={baseUrl + image_one[0].url}
    //             width={40}
    //             height={40}
    //           />
    //           <p>{image_one_title}</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
      case "web_frontend":
        return (
          <div className={companyStyles.c_cards}>
            <Image
              loader={() => myLoader((baseUrl + images[0].url) as any)}
              src={`${baseUrl}${images[0].url}`}
              placeholder="blur"
              blurDataURL={baseUrl + images[0].url}
              width={55}
              height={55}
              className={companyStyles.cardImg2}
            />
            <p>{props.heading}</p>
        </div>
      );
    default:
      return (
        <div className={companyStyles.c_cards}>
        <Image
          loader={() => myLoader((baseUrl + images[0].url) as any)}
          src={`${baseUrl}${images[0].url}`}
          placeholder="blur"
          blurDataURL={baseUrl + images[0].url}
          width={55}
          height={55}
          className={companyStyles.cardImg2}
        />
        <p>{props.heading}</p>
    </div>
      );
  }
};
export default Card;
