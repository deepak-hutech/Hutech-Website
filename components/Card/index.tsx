import AOS from "aos";
import "aos/dist/aos.css";
import marked from "marked";
import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import React, { useEffect } from "react";
import styles from "../../styles/Card.module.css";
import careerstyles from "../../styles/Careers.module.css";
import companyStyles from "../../styles/Company.module.css";
import portfolioStyles from "../../styles/Portfolio.module.css";
import servicesStyles from "../../styles/Services.module.css";
import strings from "./../../public/strings.json";

const { baseUrl } = strings;

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
    Estimated_buttons,
    estimate_image,
    Call_to_action,
    image_size,
    subtitle,
    image_position,
    Heading,
    para,
    estimate_icon,
  } = props;

  useEffect(() => {
    AOS.init();
  }, []);

  switch (type) {
    case "small_card":
      return (
        <div>
          <div
            className={styles.card}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <a id={props.id} href={Link ? Link : `/plans/${props.title}`}>
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
          <div
            className={styles.heading}
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {heading}
          </div>
        </div>
      );
    case "capabilities_cards":
      return (
        <div className={styles.capabilities_cards}>
          <div
            className={styles.capabilities}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
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
          <div
            className={styles.capabilities_cards_title}
            dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            data-aos="zoom-in"
            data-aos-duration="1200"
          ></div>
        </div>
      );
    case "successful_product_card":
      return (
        <div className={styles.successful_product_card}>
          <div
            className={styles.capabilities}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
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
          <p
            className={styles.para}
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {heading}
          </p>
          <div
            className={styles.product_para}
            dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            data-aos="zoom-in"
            data-aos-duration="1500"
          ></div>
        </div>
      );
    case "clients_card":
      return (
        <div
          className={styles.clients_card}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={`${baseUrl}${images[0].url}`}></img>
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
                className={styles.testimonial_profile}
              />
              <div>
                <div className={styles.right_card_heading}>{descrption}</div>
                <p className={styles.right_card_para}>{card_free_text}</p>
              </div>
            </div>
            <div
              className={styles.right_card_text}
              dangerouslySetInnerHTML={{ __html: marked(on_image_text) }}
            ></div>
          </div>
        </div>
      );
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
    case "mobile_app_development_card":
      return (
        <div className={servicesStyles.mobile_app_development_card} data-aos="flip-right"
          data-aos-duration="2000">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/service-details"
          >
            <div className={servicesStyles.section3_cards}>
              <div
                className={servicesStyles.section3_heading}
                dangerouslySetInnerHTML={{ __html: marked(heading) }}
              ></div>
              <div
                className={servicesStyles.section3_para}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
              <button >
                <p>
                  {call_to_action}
                  {images.map((v: any) => (
                    <div>
                      <img src={baseUrl + v.url}></img>
                    </div>
                  ))}
                </p>
              </button>
            </div>
          </a>
        </div>
      );
    case "custom_mobile_card":
      return (
        <div className={servicesStyles.mobile_app_development_cards}>
          <div className={servicesStyles.mobile_app_development_card}>
            <div
              className={servicesStyles.section5_img}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={55}
                height={55}
                className={servicesStyles.cardimg}
              />
              {/* <button>
                <p>{call_to_action}</p>
              </button> */}
            </div>
          </div>
          <div
            className={servicesStyles.section5_heading}
            dangerouslySetInnerHTML={{ __html: marked(heading) }}
            data-aos="zoom-in"
            data-aos-duration="1300"
          ></div>
          <div
            className={servicesStyles.section5_para2}
            dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            data-aos="zoom-in"
            data-aos-duration="1500"
          ></div>
        </div>
      );
    case "mobile_tech_card":
      return (
        <div className={servicesStyles.mobile_tech_card}>
          <div className={servicesStyles.mobile_tech_card}>
            <div className={servicesStyles.section6_imgages}>
              <div className={servicesStyles.section6_img}>
                <Image
                  loader={() => myLoader((baseUrl + images[0].url) as any)}
                  src={`${baseUrl}${images[0].url}`}
                  placeholder="blur"
                  blurDataURL={baseUrl + images[0].url}
                  width={70}
                  height={55}
                  className={servicesStyles.cardimg}
                />
                {/* <button>
                <p>{call_to_action}</p>
              </button> */}
                <p className={servicesStyles.iconText}>{free_text}</p>
              </div>
            </div>

            {/* <button>
                  <p>{call_to_action}</p>
                </button> */}
          </div>
          {/* <p className={servicesStyles.icon}>{heading}</p> */}
          <p className={servicesStyles.iconText}></p>
        </div>
      );
    case "dev_process_card":
      return (
        <div className={servicesStyles.dev_process_card}>
          <div className={servicesStyles.dev_process_card}>
            <div className={servicesStyles.section7_img}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={50}
                height={50}
                className={servicesStyles.cardimg}
              />
              {/* <button>
                <p>{call_to_action}</p>
              </button> */}
              <p
                className={servicesStyles.section7_para2}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></p>
            </div>

            {/* <button>
                    <p>{call_to_action}</p>
                  </button> */}
          </div>
          {/* <p className={servicesStyles.section7_para1}>{heading}</p> */}
          {/* <p className={servicesStyles.section7_para2}>{free_text}</p> */}
        </div>
      );
    case "our_work_card":
      return (
        <div className={servicesStyles.our_work_card}>
          <div className={servicesStyles.our_work_card}>
            <div className={servicesStyles.section8_img}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={300}
                height={250}
                className={servicesStyles.section8Cardimg}
              />
            </div>
          </div>
          <div className={servicesStyles.section8Para}>
            <div className={servicesStyles.section8Contents}>
              <p className={servicesStyles.section8_para1}>{heading}</p>
              <p className={servicesStyles.section8_para2}>{free_text}</p>
            </div>
          </div>
        </div>
      );
    case "feature_card":
      return (
        <div className={careerstyles.featurecard}>
          <a
            id={props.id}
          // href={link ? link : `/plans/${props.title.split(" ").join("_")}`}>>
          >
            <div className={careerstyles.featurecardimg}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={73}
                height={70.02}
              />
            </div>
            <div className={careerstyles.feature_cardtext}>
              <div className={careerstyles.feature_heading}>{heading}</div>
              <div
                className={careerstyles.feature_subheading}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            </div>
          </a>
        </div>
      );
    case "opening_card":
      return (
        <div>
          <div
            className={careerstyles.openingcard}
            style={
              heading === "IOS Developer"
                ? { backgroundColor: "#F9F8F8", border: "1px solid #D3D3D3" }
                : heading === "React Developer"
                  ? { backgroundColor: "#EFFCFF", border: "1px solid #61DAFB" }
                  : heading === "Node JS Developer"
                    ? { backgroundColor: "#F8FFF9", border: "1px solid #66CE77" }
                    : heading === "Java Developer"
                      ? { backgroundColor: "#FFF3F3", border: "1px solid #F56767" }
                      : heading === "Adriod Developer"
                        ? { backgroundColor: "#F8FFF9", border: "1px solid #66CE77" }
                        : { color: "black" }
            }
          >
            <a
              id={props.id}
              href={Link ? Link : `/career-details`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            // href={link ? link : `/plans/${props.title.split(" ").join("_")}`}>>
            >
              <div className={careerstyles.openingcardimg}>
                <Image
                  loader={() => myLoader((baseUrl + images[0].url) as any)}
                  src={`${baseUrl}${images[0].url}`}
                  placeholder="blur"
                  blurDataURL={baseUrl + images[0].url}
                  width={51}
                  height={58}
                />
              </div>

              <div className={careerstyles.opening_cardtext}>
                <div className={careerstyles.opening_heading}>{heading}</div>
                <div className={careerstyles.opening_subheading}>
                  <button>{free_text}</button>
                </div>
                <div className={careerstyles.moreinfo_icon}>
                  <a href={Link ? Link : `/career-details`}>{call_to_action}</a>
                  {/* <a className={careerstyles.rightarrowicon}>
                   
                  </a> */}
                </div>
              </div>
            </a>
          </div>

          {/* <Button variant="success"> {call_to_action}</Button>{" "} */}
          {/* <button>
                    <p>{call_to_action}</p>
                  </button> */}
        </div>
      );
    case "portfolio_card":
      return (
        <div className={portfolioStyles.portfolio_card}>
          <div
            className={portfolioStyles.portfolio_card}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className={portfolioStyles.portfolio_img}>
              <a id={props.id} href={Link ? Link : `/portfolio/${props.title}`}>
                <Image
                  loader={() => myLoader((baseUrl + images[0].url) as any)}
                  src={`${baseUrl}${images[0].url}`}
                  placeholder="blur"
                  blurDataURL={baseUrl + images[0].url}
                  width={370}
                  height={300}
                  className={portfolioStyles.portfolioCardimg}
                />
              </a>
            </div>
          </div>
          <div className={portfolioStyles.portfolio_subBox}>
            <p className={portfolioStyles.portfolio_para1}>{heading}</p>
            <p className={portfolioStyles.portfolio_para2}>{free_text}</p>
          </div>
        </div>
      );
    case "portfolio_details_cards":
      return (
        <div className={portfolioStyles.portfolio_details_cards}>
          <Image
            loader={() => myLoader((baseUrl + images[0].url) as any)}
            src={`${baseUrl}${images[0].url}`}
            placeholder="blur"
            blurDataURL={baseUrl + images[0].url}
            width={628}
            height={445}
            className={portfolioStyles.portfolioDetailsCardimg}
          />
        </div>
      );
    case "android_app_card":
      return (
        <div className={servicesStyles.androidcard}>
          <a
            id={props.id}
          // href={link ? link : `/plans/${props.title.split(" ").join("_")}`}>>
          >
            <div className={servicesStyles.androidcardimg}>
              <Image
                loader={() => myLoader((baseUrl + images[0].url) as any)}
                src={`${baseUrl}${images[0].url}`}
                placeholder="blur"
                blurDataURL={baseUrl + images[0].url}
                width={75}
                height={70}
              />
            </div>
            <div className={servicesStyles.android_cardtext}>
              <div
                className={servicesStyles.android_heading}
                dangerouslySetInnerHTML={{ __html: marked(heading) }}
              ></div>
              <div
                className={servicesStyles.android_subheading}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            </div>
          </a>
        </div>
      );
    default:
      return (
        <div className={companyStyles.c_cards}>
          <Image
            loader={() => myLoader((baseUrl + images[0]?.url) as any)}
            src={`${baseUrl}${images[0]?.url}`}
            placeholder="blur"
            blurDataURL={baseUrl + images[0]?.url}
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
