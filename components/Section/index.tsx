import AOS from "aos";
import "aos/dist/aos.css";
import marked from "marked";
import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import Breadcrumbs from "nextjs-breadcrumbs";
import React, { useEffect } from "react";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leftIcon from "../../components/assets/leftarrow.svg";
import leftIconBlog from "../../components/assets/leftarrowblog.svg";
import mailIcon from "../../components/assets/mail-icon@2x.svg";
import phoneIcon from "../../components/assets/phone-icon@2x.svg";
import rightIcon from "../../components/assets/rightarrow.svg";
import rightIconBlog from "../../components/assets/rightarrowblog.svg";
import submitIcon from "../../components/assets/submit-icon@2x.svg";
import careerstyles from "../../styles/Careers.module.css";
import companyStyles from "../../styles/Company.module.css";
import contactStyle from "../../styles/Contact.module.css";
import portfolioStyles from "../../styles/Portfolio.module.css";
import styles from "../../styles/Section.module.css";
import servicesStyles from "../../styles/Services.module.css";
import Card from "../Card";
import CareerForm from "../careerForm/index.js";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import HomeForm from "../home_form/index.js";
import strings from "./../../public/strings.json";
import expertiseStyle from "../../styles/expertise.module.css";
import leftIconportfolio from "../../components/assets/rightcaro.svg";
import rightIconportfolio from "../../components/assets/leftcaro.svg";
import link from "next/link";
import Link from "next/link";

const { baseUrl } = strings;

const myLoader = ({ src, width, quality }: any) => {
  const origin = typeof window !== "undefined" && window.location.origin;
  return `${origin}${src}?w=${width}&q=${quality || 75}`;
};
const myLoaderbanner: ImageLoader = (url: any) => {
  return url;
};

const Section: NextPage = (props: any) => {
  const {
    home_banner,
    home_button,
    sub_heading,
    type,
    Buttons,

    image_size,
    image_position,
    free_text,
    our_slack_title,
    web_front_end_title,
    web_back_end_title,
    web_front_end_para,
    web_back_end_para,
    database_title,
    database_para,
    android_title,
    android_para,
    ios_title,
    ios_para,
    devops_title,
    devops_para,
    devops_cards,
    ios_cards,
    android_card,
    cards,
    carosel_cards,
    Carosel_cards,
    carosel_card,
    estimate_image,
    Heading,
    Estimated_buttons,
    estimate_icon,
    User_Experience_Data,
    heading_text,
    Call_to_action,
    address,
    para,
  } = props;

  useEffect(() => {
    AOS.init();
  }, []);

  const CustomArrow = ({ onClick }: any) => (
    <button
      style={{ position: "absolute", right: 90, bottom: 50 }}
      onClick={onClick}
      className={styles.arrowbtn}
    >
      <Image
        loader={myLoader}
        src={rightIcon}
        alt="Picture of the author"
        width={30}
        height={17}
      />
    </button>
  );
  const CustomleftArrow = ({ onClick }: any) => (
    <button
      style={{ position: "absolute", right: 150, bottom: 50 }}
      onClick={onClick}
      className={styles.arrowbtn}
    >
      <Image
        loader={myLoader}
        src={leftIcon}
        alt="Picture of the author"
        width={30}
        height={17}
        className={styles.svgarrow}
      />
    </button>
  );
  const CustomArrowBlog = ({ onClick }: any) => (
    <button
      style={{ position: "absolute", right: "50%", bottom: 10 }}
      onClick={onClick}
      className={styles.arrowbtn}
    >
      <Image
        loader={myLoader}
        src={rightIconBlog}
        alt="Picture of the author"
        width={30}
        height={17}
      />
    </button>
  );
  const CustomleftArrowBlog = ({ onClick }: any) => (
    <button
      style={{ position: "absolute", right: "54%", bottom: 10 }}
      onClick={onClick}
      className={styles.arrowbtn}
    >
      <Image
        loader={myLoader}
        src={leftIconBlog}
        alt="Picture of the author"
        width={30}
        height={17}
        className={styles.svgarrow}
      />
    </button>
  );
  const CustomArrowportfolio = ({ onClick }: any) => (
    <button
      style={{ position: "absolute", right: "13%%", bottom: "50%" }}
      onClick={onClick}
      className={styles.arrowbtn}
    >
      <Image
        loader={myLoader}
        src={rightIconportfolio}
        alt="Picture of the author"
        width={30}
        height={17}
      />
    </button>
  );
  const CustomleftArrowportfolio = ({ onClick }: any) => (
    <button
      style={{ position: "absolute", right: "13%", bottom: "50%" }}
      onClick={onClick}
      className={styles.arrowbtn}
    >
      <Image
        loader={myLoader}
        src={leftIconportfolio}
        alt="Picture of the author"
        width={30}
        height={17}
        className={styles.svgarrow}
      />
    </button>
  );

  const responsive_expertise_carousal = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive_portfolio_details = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive_our_people_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive_portfolio_details_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive_small_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive_wide_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive_service_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  switch (type) {
    case "home_page_banner":
      return (
        <div className={styles.home_caro}>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className={styles.carosel_banner}
          >
            {carosel_cards.map((item: any) => (
              <div className={styles.carosel_card} data-aos="zoom-in">
                <img src={baseUrl + item.images[0].url} />

                <div className={styles.banner_container}>
                  {item.free_text && (
                    <div
                      className={styles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(item.free_text),
                      }}
                    ></div>
                  )}
                  {item.call_to_action && (
                    <div className={styles.buttons}>
                      <div className={styles.homecall_to_action}>
                        
                        <Link href={`/portfolio`}>
                      <a>{item.call_to_action}</a>
                    </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    case "home_banner_mobile":
      return (
        <div className={styles.home_caro_mob}>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className={styles.carosel_banner}
          >
            {carosel_cards.map((item: any) => (
              <div className={styles.carosel_card_mob}>
                <img src={baseUrl + item.images[0].url} />

                <div className={styles.banner_container}>
                  {item.free_text && (
                    <div
                      className={styles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(item.free_text),
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    case "development":
      return (
        <div className={styles.key_solutions}>
          {home_banner[0] && (
            <div className={`${styles.serviceKeySolutionimg}`}>
              <img src={baseUrl + home_banner[0].url} />
            </div>
          )}
          <div className={styles.key_solutions_textfild}>
            {free_text && (
              <div
                className={styles.development_title}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={styles.development_descrption}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
        </div>
      );
    case "successful_product":
      return (
        <div className={styles.successful_product}>
          {free_text && (
            <div
              className={styles.product_title}
              dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            ></div>
          )}
          <div className={styles.capabilities_cards}>
            {carosel_cards.map((_card: any, index: number) => (
              <Card {..._card} key={index} />
            ))}
          </div>
        </div>
      );
    case "clients":
      return (
        <div className={styles.clients}>
          {free_text && (
            <div
              className={styles.clients_title}
              dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            ></div>
          )}
          {sub_heading && (
            <div
              className={styles.descrption}
              dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
            ></div>
          )}
          <div className={styles.clients_cards}>
            {carosel_cards.map((_card: any, index: number) => (
              <Card {..._card} key={index} />
            ))}
          </div>
        </div>
      );
    case "our_latest_works":
      return (
        <div className={`${styles.our_latest_works}`}>
          <div className={styles.clientContent}>
            {free_text && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
          </div>

          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            // autoPlay={true}
            responsive={responsive_small_cards}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all 0.5s ease"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            className={styles.clientcarousel}
            customRightArrow={<CustomArrow />}
            customLeftArrow={<CustomleftArrow />}
          >
            {carosel_cards.map((_card: any, index: number) => (
              <Card {..._card} key={index} />
            ))}
          </Carousel>
        </div>
      );
    case "capabilities":
      return (
        <div className={`${styles.capabilities}`}>
          <div className={`${styles.client_banner}`}>
            <div className={styles.clientContent}>
              {free_text && (
                <div
                  className={styles.capab_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={styles.descrption}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          </div>
          <div className={styles.capabilities_cards}>
            {carosel_cards.map((_card: any, index: number) => (
              <Card {..._card} key={index} />
            ))}
          </div>
        </div>
      );
    case "home_form":
      return (
        <div className={`${styles.home_form_section}`}>
          <div className={`${styles.left_content}`}>
            <div className={styles.left_content_title}>
              {free_text && (
                <div
                  className={styles.capab_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {address && (
                <div
                  className={styles.descrption}
                  dangerouslySetInnerHTML={{ __html: marked(address) }}
                ></div>
              )}
              {Buttons && (
                <div>
                  {Buttons.map((item: any) => (
                    <div className={styles.fome_form_button}>
                      {/* {arrow_icon.map((item: any)=>(
                      <img
                      src={`${baseUrl}${Buttons[0].arrow_icon[0].url}`}
                      className={styles.arrowicon}
                    />
                    ))} */}
                      <img
                        src={`${baseUrl}${item.arrow_icon[0].url}`}
                        className={styles.arrowicon}
                      />
                      <a href={item.link}>
                      {item.call_to_action}{" "}</a>
                    </div>
                  ))}
                </div>
              )}
              {heading_text && (
                <div
                  dangerouslySetInnerHTML={{ __html: marked(heading_text) }}
                ></div>
              )}
            </div>
          </div>

          <div className={styles.right_from_section}>
            <HomeForm />
          </div>
        </div>
      );
    case "company_banner":
      return (
        <div className={companyStyles.company_banner}>
          <div className={companyStyles.campany_banner_web}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={400}
                width={"100%"}
                className={companyStyles.bannerimg}
              />
            )}
          </div>

          <div className={companyStyles.banner_container}>
            {free_text && (
              <div className={companyStyles.content}>
                <div
                  className={companyStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {sub_heading && (
                  <div
                    className={companyStyles.description}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
                {home_button && (
                  <div className={companyStyles.buttons}>
                    {home_button.map((item: any) => (
                      <button className={companyStyles.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    case "about_company":
      return (
        <div className={companyStyles.abt_company}>
          <div id="breadCrum">
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>
          <Container>
            <Row>
              {free_text && (
                <div
                  className={companyStyles.heading}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={6} sm={12}>
                {home_banner[0] && (
                  <div className={`${companyStyles.abt_img}`}>
                    <Image
                      loader={() =>
                        myLoaderbanner((baseUrl + home_banner[0].url) as any)
                      }
                      src={baseUrl + home_banner[0].url}
                      placeholder="blur"
                      blurDataURL={baseUrl + home_banner[0].url}
                      height={421}
                      width={497}
                    />
                  </div>
                )}
              </Col>
              <Col md={6} sm={12}>
                {sub_heading && (
                  <div
                    className={companyStyles.note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      );
    case "values_vision_mission":
      return (
        <div className={companyStyles.values_vision_banner}>
          <div className={companyStyles.values_vision}>
            {carosel_cards.map((v: any) => (
              <div className={companyStyles.vvContent} data-aos="fade-up">
                <img
                  className={companyStyles.profile}
                  src={baseUrl + v.images.map((v: any) => v.url)}
                  placeholder="blur"
                  height={50}
                  width={50}
                />
                <h5 className={companyStyles.heading}>{v.heading}</h5>
                <div
                  className={companyStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(v.free_text) }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      );
    case "our_people":
      return (
        <div className={companyStyles.our_people}>
          <Container>
            <Row>
              {free_text && (
                <div
                  className={companyStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </Row>
            <Row>
              <div className={companyStyles.sub_heading}>
                {sub_heading && (
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            </Row>
            <Row>
              <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                autoPlay={true}
                responsive={responsive_our_people_cards}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all 0.5s ease"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
                className={styles.clientccarousel}
                customRightArrow={<CustomArrow />}
                customLeftArrow={<CustomleftArrow />}
              >
                {carosel_cards.map((v: any) => (
                  <Col>
                    <div className={companyStyles.profiles} data-aos="zoom-in">
                      <div className={companyStyles.imgborder}>
                        <img
                          className={companyStyles.img}
                          src={baseUrl + v.images.map((v: any) => v.url)}
                          placeholder="blur"
                          height={163}
                          width={163}
                        />
                      </div>
                      <h6>{v.heading}</h6>
                      <p className={companyStyles.role}>{v.free_text}</p>
                    </div>
                  </Col>
                ))}
              </Carousel>
            </Row>
          </Container>
        </div>
      );
    case "partner":
      return (
        <div className={`${companyStyles.partner}`}>
          <div className={`${companyStyles.partner_head}`}>
            {free_text && (
              <div
                className={`${companyStyles.heading}`}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={companyStyles.desc}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
          <div className={companyStyles.allProducts} data-aos="zoom-out-up">
            {carosel_cards.map((v: any) => (
              <div className={companyStyles.logos}>
                <img
                  className={companyStyles.images}
                  src={baseUrl + v.images.map((v: any) => v.url)}
                  placeholder="blur"
                  height={45}
                  width={137}
                />
              </div>
            ))}
          </div>
        </div>
      );
    case "our_tech_slack":
      return (
        <div className={`${companyStyles.tech_slack}`}>
          {our_slack_title ? (
            <div className={`${companyStyles.heading}`}>
              <h2
                className={companyStyles.our_slack_title}
                dangerouslySetInnerHTML={{ __html: marked(our_slack_title) }}
              />
              {free_text && (
                <div
                  className={companyStyles.desc}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </div>
          ) : (
            " "
          )}
        </div>
      );
    case "web_frontend":
      return (
        <div className={`${companyStyles.web_dev}`}>
          <Container>
            <Row>
              <Col md={6} className={companyStyles.webContainer}>
                {web_front_end_title ? (
                  <div className={`${companyStyles.web_front_end_title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(web_front_end_title),
                      }}
                    />
                    {web_front_end_para && (
                      <div
                        className={companyStyles.web_front_end_para}
                        dangerouslySetInnerHTML={{
                          __html: marked(web_front_end_para),
                        }}
                      ></div>
                    )}
                    <div
                      className={companyStyles.company_cards}
                      data-aos="fade-up"
                    >
                      {carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6} className={companyStyles.webContainer}>
                {web_back_end_title ? (
                  <div className={`${companyStyles.web_front_end_title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(web_back_end_title),
                      }}
                    />
                    {web_back_end_para && (
                      <div
                        className={companyStyles.web_front_end_para}
                        dangerouslySetInnerHTML={{
                          __html: marked(web_back_end_para),
                        }}
                      ></div>
                    )}
                    <div
                      className={companyStyles.company_cards}
                      data-aos="fade-up"
                    >
                      {Carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6} className={companyStyles.webContainer}>
                {database_title ? (
                  <div className={`${companyStyles.web_front_end_title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(database_title),
                      }}
                    />
                    {database_para && (
                      <div
                        className={companyStyles.web_front_end_para}
                        dangerouslySetInnerHTML={{
                          __html: marked(database_para),
                        }}
                      ></div>
                    )}
                    <div
                      className={companyStyles.company_cards}
                      data-aos="fade-up"
                    >
                      {carosel_card.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6} className={companyStyles.webContainer}>
                {android_title ? (
                  <div className={`${companyStyles.web_front_end_title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(android_title),
                      }}
                    />
                    {android_para && (
                      <div
                        className={companyStyles.web_front_end_para}
                        dangerouslySetInnerHTML={{
                          __html: marked(android_para),
                        }}
                      ></div>
                    )}
                    <div
                      className={companyStyles.company_cards}
                      data-aos="fade-up"
                    >
                      {android_card.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6} className={companyStyles.webContainer}>
                {ios_title ? (
                  <div className={`${companyStyles.web_front_end_title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{ __html: marked(ios_title) }}
                    />
                    {ios_para && (
                      <div
                        className={companyStyles.web_front_end_para}
                        dangerouslySetInnerHTML={{ __html: marked(ios_para) }}
                      ></div>
                    )}
                    <div
                      className={companyStyles.company_cards}
                      data-aos="fade-up"
                    >
                      {ios_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6} className={companyStyles.webContainer}>
                {devops_title ? (
                  <div className={`${companyStyles.web_front_end_title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{ __html: marked(devops_title) }}
                    />
                    {devops_para && (
                      <div
                        className={companyStyles.web_front_end_para}
                        dangerouslySetInnerHTML={{
                          __html: marked(devops_para),
                        }}
                      ></div>
                    )}
                    <div
                      className={companyStyles.company_cards}
                      data-aos="fade-up"
                    >
                      {devops_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
            </Row>
          </Container>
        </div>
      );
    case "current_opening_banner":
      return (
        <div className={companyStyles.current_opening}>
          <div className={companyStyles.current_opening_banner_web}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={400}
                width={"100%"}
                className={companyStyles.bannerimg}
              />
            )}
          </div>

          <div className={companyStyles.banner_container}>
            {free_text && (
              <div className={companyStyles.content}>
                <div
                  className={companyStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {home_button && (
                  <div className={companyStyles.buttons}>
                    {home_button.map((item: any) => (
                      <div className={companyStyles.call_to_action_req}>
                        {" "}
                        {item.call_to_action}{" "}
                        {/* <img
                        src={`${baseUrl}${home_button[0].arrow_icon[0].url}`}
                        className={styles.arrowicon}
                      /> */}
                      </div>
                    ))}
                  </div>
                )}
                {sub_heading && (
                  <div
                    className={companyStyles.description}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    case "home_blog":
      return (
        <div className={`${styles.blog_banner}`}>
          <div className={styles.carousel}>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive_wide_cards}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              keyBoardControl={true}
              customTransition="all 0.5s ease"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
              className={styles.homeblogcarousel}
              customRightArrow={<CustomArrowBlog />}
              customLeftArrow={<CustomleftArrowBlog />}
            >
              {cards.map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </Carousel>
          </div>
        </div>
      );
    case "contact_us":
      return (
        <>
          <div className={companyStyles.company_banner}>
            <div className={companyStyles.campany_banner_web}>
              {home_banner[0] && (
                <Image
                  loader={() =>
                    myLoaderbanner((baseUrl + home_banner[0].url) as any)
                  }
                  src={baseUrl + home_banner[0].url}
                  placeholder="blur"
                  blurDataURL={baseUrl + home_banner[0].url}
                  height={400}
                  width={"100%"}
                  className={companyStyles.bannerimg}
                />
              )}
            </div>

            <div className={companyStyles.banner_container}>
              {free_text && (
                <div className={companyStyles.content}>
                  <div
                    className={companyStyles.free_text}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  />
                  {sub_heading && (
                    <div
                      className={companyStyles.descrption}
                      dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                    ></div>
                  )}
                  {home_button && (
                    <div className={companyStyles.buttons}>
                      {home_button.map((item: any) => (
                        <div className={companyStyles.call_to_action}>
                          {" "}
                          {item.call_to_action}{" "}
                          {/* <img
                      src={`${baseUrl}${home_button[0].arrow_icon[0].url}`}
                      className={styles.arrowicon}
                    /> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div style={{ padding: "2% 6% 0" }}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>
          <div className={contactStyle.contact}>
            <div className={contactStyle.content}>
              <div className={contactStyle.tabsContainer}>
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className={contactStyle.tabStyle}
                >
                  <Tab
                    eventKey="home"
                    title={
                      <span>
                        <Image
                          loader={myLoader}
                          src={submitIcon}
                          alt="Picture of the author"
                          width={30}
                          height={50}
                        />{" "}
                        <div className={contactStyle.tabtitle}>
                          Submit a form
                        </div>
                      </span>
                    }
                  >
                    <div className={contactStyle.tab1} data-aos="fade-up">
                      <div className="mb-5">
                        <h4>
                          Take a Step Forward To Start a Conversation With Us !
                        </h4>
                      </div>
                      <ContactForm />
                    </div>
                  </Tab>

                  <Tab
                    eventKey="profile"
                    title={
                      <span>
                        <Image
                          loader={myLoader}
                          src={mailIcon}
                          alt="Picture of the author"
                          width={30}
                          height={50}
                        />{" "}
                        <div className={contactStyle.tabtitle}>
                          Shoot us an Email
                        </div>
                      </span>
                    }
                    // title="Shoot us an Email"
                  >
                    <div className={contactStyle.tab2}>
                      <div>
                        <h4>
                          Send us an email with necessary screenshots and your
                          account details to:
                        </h4>
                        <div className={contactStyle.sendEmail}>
                          <Button variant="">
                            contactus@hutechsolutions.com
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4>For sales enquiries, contact us at:</h4>
                        <div className={contactStyle.sendEmail}>
                          <Button variant="">pravat@hutechsolutions.com</Button>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab
                    eventKey="contact"
                    title={
                      <span>
                        <Image
                          loader={myLoader}
                          src={phoneIcon}
                          alt="Picture of the author"
                          width={30}
                          height={50}
                        />{" "}
                        <div className={contactStyle.tabtitle}>
                          {" "}
                          Give us a call
                        </div>
                      </span>
                    }
                    // title="Give us a call"
                  >
                    <div className={contactStyle.tab3}>
                      <div>
                        <h4>
                          Reach out to Hutech Mail technical support team at:
                        </h4>
                        <p>
                          (Call support available only for paid users of Hutech
                          Mail)
                        </p>
                      </div>
                      <div>
                        <Row>
                          <Col>India +91-2874787284</Col>
                        </Row>
                        <Row>
                          <Col>India +91-2874787284</Col>
                        </Row>
                        <Row>
                          <Col>India +91-2874787284</Col>
                        </Row>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </>
      );
    case "service_page_banner":
      return (
        <div className={servicesStyles.section1}>
          <div className={servicesStyles.service_banner_web}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={400}
                width={"100%"}
                className={companyStyles.bannerimg}
              />
            )}
          </div>

          <div className={servicesStyles.banner_container}>
            {free_text && (
              <div className={servicesStyles.content} data-aos="fade-up">
                <div
                  className={servicesStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {sub_heading && (
                  <div
                    className={servicesStyles.descrption}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
                {home_button && (
                  <div className={servicesStyles.buttons}>
                    {home_button.map((item: any) => (
                      <div className={servicesStyles.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                        {/* <img
                        src={`${baseUrl}${home_button[0].arrow_icon[0].url}`}
                        className={styles.arrowicon}
                      /> */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    case "mobile_app_development":
      return (
        <div className={`${servicesStyles.section2}`}>
          <div style={{ padding: "3% 6% 0" }}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>

          <div className={`${servicesStyles.client_banner}`}>
            <div
              className={servicesStyles.clientContent}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {free_text && (
                <div
                  className={servicesStyles.section2_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={servicesStyles.section2_note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          </div>
          {/* <div className={styles.capabilities_cards}>
                {carosel_cards.map((_card: any, index: number) => (
                    <Card {..._card} key={index} />
                  ))}
                </div> */}
        </div>
      );
    case "expertise_in_mobile_app_banner":
      return (
        <div className={`${servicesStyles.section3}`}>
          <div className={`${servicesStyles.Industries_banner}`}>
            <div className={`${servicesStyles.client_banner}`}>
              <div className={servicesStyles.clientContent}>
                {free_text && (
                  <div
                    className={servicesStyles.section3_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
                    className={servicesStyles.section3_note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            </div>
            {
              <div className={servicesStyles.mobile_app_development_card}>
                {carosel_cards[0] && (
                  <div className={servicesStyles.section3_card}>
                    {carosel_cards.map((_card: any, index: number) => (
                      <Card {..._card} key={index} />
                    ))}
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      );
    case "dedicated_developer":
      return (
        <div className={`${servicesStyles.service_section4}`}>
          <div className={`${servicesStyles.client_banner}`}>
            <div className={servicesStyles.clientContent4}>
              {free_text && (
                <div
                  className={servicesStyles.section4_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {home_button && (
                <div className={servicesStyles.section4_buttons}>
                  {home_button.map((item: any) => (
                    <div className={servicesStyles.call_to_action}>
                      {" "}
                      {item.call_to_action}{" "}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {sub_heading && (
              <div
                className={servicesStyles.note2}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
        </div>
      );
    case "custom_mobile_app":
      return (
        <div className={`${servicesStyles.section5}`}>
          <div className={`${servicesStyles.client_banner5}`}>
            <div className={servicesStyles.section5_content}>
              {free_text && (
                <div
                  className={servicesStyles.section5_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={servicesStyles.section5_note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          </div>
          <div className={`${servicesStyles.section5_img_container}`}>
            <div className={`${servicesStyles.imgColumn}`}>
              {home_banner[0] && (
                <div
                  className={`${servicesStyles.section5_serviceimg}`}
                  data-aos="zoom-in"
                >
                  <img src={baseUrl + home_banner[0].url} />
                </div>
              )}
            </div>
            <div className={servicesStyles.cardColumn}>
              {carosel_cards[0] && (
                <div className={servicesStyles.section5_cards}>
                  {carosel_cards.map((_card: any, index: number) => (
                    <Card {..._card} key={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    case "mobile_technologies":
      return (
        <div className={`${servicesStyles.section6}`}>
          <div className={`${servicesStyles.Industries_banner}`}>
            <div className={`${servicesStyles.client_banner}`}>
              <div className={servicesStyles.clientContent}>
                {free_text && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className={servicesStyles.section6_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className={servicesStyles.section6_note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
              {/* {home_banner[0] && (
          <div className={`${servicesStyles.section6_serviceimg}`}>
            <img src={baseUrl + home_banner[0].url} />
          </div>
        )} */}
            </div>
            {carosel_cards[0] && (
              <div
                className={servicesStyles.section6_imgages}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                {carosel_cards.map((_card: any, index: number) => (
                  <Card {..._card} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    case "development_process":
      return (
        <div className={`${servicesStyles.section7}`}>
          <div className={`${servicesStyles.Industries_banner}`}>
            <div className={`${servicesStyles.client_banner}`}>
              <div className={servicesStyles.clientContent}>
                {free_text && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className={servicesStyles.section7_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}

                <div className={servicesStyles.sec7_container}>
                  <div className={servicesStyles.sec7_numbers}>
                    <div>
                      <h4>1</h4>
                      <h5>
                        Anlysis <br />
                        Requirement
                      </h5>
                    </div>
                    <div>
                      <h4>2</h4>
                      <h5>Wireframing</h5>
                    </div>
                    <div>
                      <h4>3</h4>
                      <h5>
                        Design and <br /> Approval
                      </h5>
                    </div>
                    <div>
                      <h4>4</h4>
                      <h5>
                        Development <br />
                        Process
                      </h5>
                    </div>
                    <div>
                      <h4>5</h4>
                      <h5>Testing</h5>
                    </div>
                    <div>
                      <h4>6</h4>
                      <h5>Launch</h5>
                    </div>
                  </div>
                </div>
                <div className={servicesStyles.dots}> </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "our_works_banner":
      return (
        <div className={`${servicesStyles.section8}`}>
          <div className={`${servicesStyles.Industries_banner}`}>
            <div className={`${servicesStyles.client_banner}`}>
              <div className={servicesStyles.clientContent}>
                {free_text && (
                  <div
                    className={servicesStyles.section8_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
                    className={servicesStyles.section8_note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            </div>
            {carosel_cards[0] && (
              <div
                className={servicesStyles.section8_img}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {carosel_cards.map((_card: any, index: number) => (
                  <Card {..._card} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      );

    case "career_banner":
      return (
        <div className={`${careerstyles.main_sec1}`}>
          <div className={careerstyles.section1}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={470}
                width={"100%"}
                className={careerstyles.careerbannerimg}
                // style="max-width:100%;height:auto;"
              />
            )}
          </div>
          <div className={careerstyles.section1_centerText}>
            {free_text && (
              <div
                className={careerstyles.section1_subText1}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={careerstyles.section1_subText2}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
        </div>
      );
    case "culture_banner":
      return (
        <div className={careerstyles.section2}>
          <div className={careerstyles.breadCum_career}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>
          <div className={careerstyles.section2_content}>
            <div className={careerstyles.sec2_left}>
              {free_text && (
                <div
                  className={careerstyles.sec2_left_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={careerstyles.sec2_left_note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
              <button className={careerstyles.opening_btn}>
                {home_button && (
                  <div>
                    {home_button.map((item: any) => (
                      <div className={careerstyles.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                      </div>
                    ))}
                  </div>
                )}
              </button>
            </div>
            <div className={careerstyles.sec2_right}>
              {home_banner[0] && (
                <Image
                  loader={() =>
                    myLoaderbanner((baseUrl + home_banner[0].url) as any)
                  }
                  src={baseUrl + home_banner[0].url}
                  placeholder="blur"
                  blurDataURL={baseUrl + home_banner[0].url}
                  height={440}
                  width={659}
                />
              )}
            </div>
          </div>
        </div>
      );
    case "feature_banner":
      return (
        <div className={careerstyles.section3}>
          <div className={careerstyles.section3_container}>
            {free_text && (
              <div
                className={careerstyles.section3_title}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={careerstyles.section3_note}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
            {carosel_cards[0] && (
              <div className={careerstyles.section3_cards}>
                {carosel_cards.map((_card: any, index: number) => (
                  <Card {..._card} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    case "current_opening_career":
      return (
        <div className={careerstyles.section4}>
          {free_text && (
            <div
              className={careerstyles.section4_subText1}
              dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            ></div>
          )}
          {carosel_cards[0] && (
            <div className={careerstyles.section4_cards}>
              {carosel_cards.map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </div>
          )}
        </div>
      );
    case "estimate_banner":
      return (
        <div className={careerstyles.section5}>
          <div className={careerstyles.section5_banner_web}>
            {estimate_image[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + estimate_image[0].url) as any)
                }
                src={baseUrl + estimate_image[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + estimate_image[0].url}
                height={360}
                width={"100%"}
                className={careerstyles.estimatebannerimg}
              />
            )}
          </div>

          <div className={careerstyles.section5_centerText}>
            {Heading && (
              <div
                className={careerstyles.section5_subText1}
                dangerouslySetInnerHTML={{ __html: marked(Heading) }}
              ></div>
            )}
            {free_text && (
              <div
                className={careerstyles.section5_subText2}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {Estimated_buttons && (
              <div className={careerstyles.Estimate_btn1}>
                {Estimated_buttons.map((item: any) => (
                  <div className={careerstyles.call_to_action}>
                    {" "}
                    {item.call_to_action}{" "}
                    <img
                      src={`${baseUrl}${Estimated_buttons[0].arrow_icon[0].url}`}
                      className={careerstyles.estimatearrowicon}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className={careerstyles.section5_subText4}>
              {para && (
                <div
                  className={careerstyles.estimatenote}
                  dangerouslySetInnerHTML={{ __html: marked(para) }}
                ></div>
              )}
              <div className={careerstyles.estimate_call}>
                <img
                  src={`${baseUrl}${estimate_icon[0].url}`}
                  className={careerstyles.estimatearrowicon}
                />

                {Call_to_action && (
                  <div
                    className={careerstyles.estimatenote}
                    dangerouslySetInnerHTML={{
                      __html: marked(Call_to_action),
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    case "qualification_banner":
      return (
        <div className={careerstyles.careerdetails_container}>
          <div className={careerstyles.careerdetails_breadcrumb}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>
          <div className={careerstyles.qualification_section2}>
            <div className={careerstyles.apply_left}>
              {User_Experience_Data[0] && (
                <div className={careerstyles.apply_section2_left}>
                  {User_Experience_Data.map((_card: any, index: number) => (
                    <div className={careerstyles.apply_left_title}>
                      <div className={careerstyles.apply_left_subtitle}>
                        {_card.title && (
                          <div
                            className={careerstyles.qualification_left_title}
                            dangerouslySetInnerHTML={{
                              __html: marked(_card.title),
                            }}
                          ></div>
                        )}
                      </div>
                      <div className={careerstyles.apply_left_subtitle}>
                        {_card.free_text && (
                          <div
                            className={careerstyles.qualification_left_note}
                            dangerouslySetInnerHTML={{
                              __html: marked(_card.free_text),
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={careerstyles.apply_right}>
              <h4 className={careerstyles.apply_heading}>Apply Now</h4>
              <div className={careerstyles.careerForm_style}>
                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      );

    case "portfolio_banner":
      return (
        <div className={portfolioStyles.portfolio_section1}>
          <div className={portfolioStyles.portfolio_web_banner}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={400}
                width={"100%"}
                className={companyStyles.bannerimg}
              />
            )}
          </div>

          <div className={portfolioStyles.banner_container}>
            {free_text && (
              <div className={portfolioStyles.content}>
                <div
                  className={portfolioStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {sub_heading && (
                  <div
                    className={portfolioStyles.descrption}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            )}
          </div>
        </div>
      );

    case "portfolio_img_banner":
      return (
        <div className={`${portfolioStyles.porfolio_card_section}`}>
          <div style={{ padding: "4% 6% 0" }}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>
          <div className={`${portfolioStyles.Industries_banner}`}>
            <div className={`${portfolioStyles.client_banner}`}>
              <div className={portfolioStyles.clientContent}>
                {/* {free_text && (
                  <div
                    className={portfolioStyles.portfolio_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )} */}
                {sub_heading && (
                  <div
                    className={portfolioStyles.portfolio_sec2_note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            </div>
            {
              <div className={portfolioStyles.porfolio_card}>
                {carosel_cards[0] && (
                  <div className={portfolioStyles.portfolio_img}>
                    {carosel_cards.map((_card: any, index: number) => (
                      <Card {..._card} key={index} />
                    ))}
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      );
    case "portfolio_sub_banner":
      return (
        <div className={`${portfolioStyles.porfolioDetails_card_section}`}>
          <div className={`${portfolioStyles.Industries_section1}`}>
            {
              <div className={portfolioStyles.porfolio_details_cards}>
                <Carousel
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive_portfolio_details}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  keyBoardControl={true}
                  customTransition="all 0.5s ease"
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  // itemClass="carousel-item-padding-40-px"
                  className={styles.homeblogcarousel}
                  customRightArrow={<CustomArrowportfolio />}
                  customLeftArrow={<CustomleftArrowportfolio />}
                >
                  {carosel_cards.map((_card: any, index: number) => (
                    <div
                      className={portfolioStyles.porfolioDetails_img}
                      key={index}
                    >
                      <Card {..._card} />
                    </div>
                  ))}
                </Carousel>
              </div>
            }

            <div className={`${portfolioStyles.pclient_banner}`}>
              <div className={portfolioStyles.clientContent}>
                {free_text && (
                  <div
                    className={portfolioStyles.porfolioDetails_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
                    className={portfolioStyles.porfolioDetails_note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    case "end_to_end_banner":
      return (
        <div className={servicesStyles.seviceinner_sec4_Container}>
          {free_text && (
            <div
              className={servicesStyles.seviceinner_sec4_title}
              dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            ></div>
          )}
          {sub_heading && (
            <div
              className={servicesStyles.seviceinner_sec4_descrption}
              dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
            ></div>
          )}
          {carosel_cards[0] && (
            <div className={servicesStyles.seviceinner_sec4_cards}>
              {carosel_cards.map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </div>
          )}
        </div>
      );
    case "servicedetails_banner":
      return (
        <div className={servicesStyles.seviceinner_bannerimg}>
          <div className={servicesStyles.servicedetails_banner_web}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={488}
                width={"100%"}
                className={servicesStyles.seviceinner_bannerimg}
              />
            )}
          </div>

          <div className={servicesStyles.seviceinner_banner_container}>
            {free_text && (
              <div
                className={servicesStyles.seviceinner_free_text}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={servicesStyles.seviceinner_descrption}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
            {home_button && (
              <div className={servicesStyles.seviceinner_banner_buttons}>
                {home_button.map((item: any) => (
                  <div className={servicesStyles.servicecall_to_action}>
                    {" "}
                    {item.call_to_action}{" "}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    case "android_app_left_banner":
      return (
        <div className={servicesStyles.serviceinner_sec2_Container}>
          <div style={{ padding: "4% 6% 0" }}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>
          {free_text && (
            <div
              className={servicesStyles.serviceinner_sec2_heading}
              dangerouslySetInnerHTML={{ __html: marked(free_text) }}
            ></div>
          )}
          <div className={servicesStyles.serviceinner_sec2_Content}>
            {home_banner[0] && (
              <div className={`${servicesStyles.serviceinner_sec2_left_img}`}>
                <Image
                  loader={() =>
                    myLoaderbanner((baseUrl + home_banner[0].url) as any)
                  }
                  src={baseUrl + home_banner[0].url}
                  placeholder="blur"
                  blurDataURL={baseUrl + home_banner[0].url}
                  height={485}
                  width={497}
                />
              </div>
            )}

            {sub_heading && (
              <div
                className={servicesStyles.serviceinner_sec2_left_note}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
        </div>
      );

    case "android_app_right_banner":
      return (
        // <div className={servicesStyles.serviceinner_sec3_Container}>
        <div className={servicesStyles.serviceinner_sec3_Content}>
          <div className={servicesStyles.serviceinner_sec3_Content_left}>
            {free_text && (
              <div
                className={servicesStyles.serviceinner_sec3_heading}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={servicesStyles.serviceinner_sec3_left_note}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>

          {home_banner[0] && (
            <div className={`${servicesStyles.serviceinner_sec3_left_img}`}>
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={389}
                width={613}
              />
            </div>
          )}
        </div>
        // </div>
      );
    case "expertise_banner":
      return (
        <div className={expertiseStyle.section1}>
          <div className={expertiseStyle.expertise_banner_web}>
            {home_banner[0] && (
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={400}
                width={"100%"}
                className={expertiseStyle.bannerimg}
              />
            )}
          </div>

          <div className={expertiseStyle.banner_container}>
            {free_text && (
              <div className={expertiseStyle.content}>
                <div
                  className={expertiseStyle.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {sub_heading && (
                  <div
                    className={expertiseStyle.descrption}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
                {home_button && (
                  <div className={expertiseStyle.buttons}>
                    {home_button.map((item: any) => (
                      <div className={expertiseStyle.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                        {/* <img
                          src={`${baseUrl}${home_button[0].arrow_icon[0].url}`}
                          className={styles.arrowicon}
                        /> */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    case "field_expertise":
      return (
        <div className={`${expertiseStyle.section2}`}>
          <div className={expertiseStyle.breadCrum_expert}>
            <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
          </div>

          <div className={`${expertiseStyle.client_banner}`}>
            <div className={expertiseStyle.clientContent}>
              {free_text && (
                <div
                  className={expertiseStyle.section2_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={expertiseStyle.section2_note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          </div>
          {/* <div className={styles.capabilities_cards}>
                    {carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div> */}
        </div>
      );
    case "benefits_provide":
      return (
        <div className={expertiseStyle.section3}>
          {home_banner[0] && (
            <div className={`${expertiseStyle.section3_left_img}`}>
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={324}
                width={512}
              />
            </div>
          )}
          <div className={expertiseStyle.section3_Content}>
            {free_text && (
              <div
                className={expertiseStyle.section3_heading}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={expertiseStyle.section3_left_note}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
        </div>
      );

    case "expertise_carousal":
      return (
        <div className={`${expertiseStyle.section4}`}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive_expertise_carousal}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 0.5s ease"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className={servicesStyles.section3_card}>
              {carosel_cards.slice(0, 3).map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </div>
            <div className={servicesStyles.section3_card}>
              {carosel_cards.slice(3, 6).map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </div>
            <div className={servicesStyles.section3_card}>
              {carosel_cards.slice(6, 9).map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </div>
            <div className={servicesStyles.section3_card}>
              {carosel_cards.slice(9, 11).map((_card: any, index: number) => (
                <Card {..._card} key={index} />
              ))}
            </div>
          </Carousel>
          ;
        </div>
      );
    case "expertise_description":
      return (
        <div className={expertiseStyle.section5}>
          {home_banner[0] && (
            <div className={`${expertiseStyle.section5_left_img}`}>
              <Image
                loader={() =>
                  myLoaderbanner((baseUrl + home_banner[0].url) as any)
                }
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={324}
                width={512}
              />
            </div>
          )}
          <div className={expertiseStyle.section5_Content}>
            {free_text && (
              <div
                className={expertiseStyle.section5_heading}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {sub_heading && (
              <div
                className={expertiseStyle.section5_left_note}
                dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
              ></div>
            )}
          </div>
        </div>
      );

    case "blog_banner":
      return (
        <div className={companyStyles.company_banner}>
          {home_banner[0] && (
            <Image
              loader={() =>
                myLoaderbanner((baseUrl + home_banner[0].url) as any)
              }
              src={baseUrl + home_banner[0].url}
              placeholder="blur"
              blurDataURL={baseUrl + home_banner[0].url}
              height={400}
              width={"100%"}
              className={companyStyles.bannerimg}
            />
          )}
          <div className={companyStyles.banner_container}>
            {free_text && (
              <div className={companyStyles.content}>
                <div
                  className={companyStyles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {sub_heading && (
                  <div
                    className={companyStyles.descrption}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            )}
            <div></div>
          </div>
          {carosel_cards[0] && (
            <div className={careerstyles.section4_cards}>
              {carosel_cards.map((_card: any, index: number) => (
                <div>
                  <Card {..._card} key={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      );

    default:
      return <div></div>;
  }
  <div>
    <Footer />
  </div>;
};
export default Section;
