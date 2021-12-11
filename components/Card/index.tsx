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
    image,
    on_image_text,
    card_free_text,
    descrption,
    type,
    Link,
    image_one_title,
    call_to_action,
    arrow,
    profile_img,
  } = props;

  switch (type) {
    case "small_card":
      return (
        <div>
        <div className={styles.card}>
          <a
            id={props.id}
            href={Link ? Link : `/plans/${props.title}`}
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
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images.url}
                width={55}
                height={55}
                className={styles.cardimg}
              />
            </div>
            <div className={styles.capabilities_cards_title} dangerouslySetInnerHTML={{ __html: marked(free_text)}}></div>
          
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
            <p className={styles.para}>{heading}</p>
            <div className={styles.product_para} dangerouslySetInnerHTML={{ __html: marked(free_text)}}></div>
           
          
        </div>
      );
      case "clients_card":
      return (
       
         
            <div className={styles.clients_card}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={"100%"}
                height={"100%"}
                className={styles.cardimg}
              />

            </div>
      );
    case "wide_card":
      return (
        <div className={styles.wide_card_}>
        <div className={styles.blog}>
           <Image
                loader={() => myLoader((baseUrl + image[0].url) as any)}
                src={`${baseUrl}${image[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + image[0].url}
                width={420}
                height={430}
              />
         </div>
          <div className={styles.card_contant}>
            
           
            
            <div className={styles.right_card}>
              <Image
                loader={() => myLoader((baseUrl + profile_img[0].url) as any)}
                src={`${baseUrl}${profile_img[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + profile_img[0].url}
                width={54}
                height={54}
              />
              <div>
              <div className={styles.right_card_heading}>{descrption}</div>
               <p className={styles.right_card_para}>{card_free_text}</p>
              </div>
            </div>
            <div className={styles.right_card_text} dangerouslySetInnerHTML={{ __html: marked(on_image_text)}}></div>
           
          </div>
        
        </div>
      );
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
