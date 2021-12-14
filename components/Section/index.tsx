import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import styles from "../../styles/Section.module.css";

import Action from "../Actions";
import Card from "../Card";
import { baseUrl } from "./../../public/strings.json";
import marked from "marked";
import AssetCard from "../AssetCard";
import Carousel from "react-multi-carousel";
import Accordian from "../accordian/Accordian";
import Mobapp from "../mobapptype";
import "react-multi-carousel/lib/styles.css";
import companyStyles from "../../styles/Company.module.css";
import contactStyle from "../../styles/Contact.module.css";
import Footer from "../Footer";
import { Tabs, Tab, Form, Button, Row, Col, Container } from "react-bootstrap";
import ContactForm from "../ContactForm";
import servicesStyles from "../../styles/Services.module.css";
import careerstyles from "../../styles/Careers.module.css";
import CareerForm from "../careerForm/index.js";
import portfolioStyles from "../../styles/Portfolio.module.css";

const myLoader: ImageLoader = (url: any) => {
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
    web_front_end_title,
    web_back_end_title,
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
  const responsive_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  const responsive_small_cards = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
        <div className={styles.home_bannerimg}>
          {home_banner[0] && (
            <Image
              loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
              src={baseUrl + home_banner[0].url}
              placeholder="blur"
              blurDataURL={baseUrl + home_banner[0].url}
              height={600}
              width={"100%"}
              className={styles.bannerimg}
            />
          )}
          <div className={styles.banner_container}>
            {free_text && (
              <div className={styles.content}>
                <div
                  className={styles.free_text}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                />
                {sub_heading && (
                  <div
                    className={styles.descrption}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
                {home_button && (
                  <div className={styles.buttons}>
                    {home_button.map((item: any) => (
                      <div className={styles.homecall_to_action}>
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
                        src={`${baseUrl}${Buttons[0].arrow_icon[0].url}`}
                        className={styles.arrowicon}
                      />
                      {item.call_to_action}{" "}
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

          <div className={styles.right_from_section}>hii</div>
        </div>
      );

    case "company_banner":
      return (
        <div className={companyStyles.company_banner}>
          {home_banner[0] && (
            <Image
              loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
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
      );
    case "about_company":
      return (
        <div className={companyStyles.abt_company}>
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
              <Col>
                {home_banner[0] && (
                  <div className={`${companyStyles.abt_img}`}>
                    <Image
                      loader={() =>
                        myLoader((baseUrl + home_banner[0].url) as any)
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
              <Col>
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
        <div className={companyStyles.values_vision}>
          <Container>
            <Row>
              {carosel_cards.map((v: any) => (
                <Col>
                  <img
                    className={companyStyles.profile}
                    src={baseUrl + v.images.map((v: any) => v.url)}
                    placeholder="blur"
                    height={50}
                    width={50}
                  />
                  <p className={companyStyles.heading}>{v.heading}</p>
                  <p className={companyStyles.free_text}>{v.free_text}</p>
                </Col>
              ))}
            </Row>
          </Container>
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
                  <h6
                    className=""
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></h6>
                )}
              </div>
            </Row>
            <Row>
              {carosel_cards.map((v: any) => (
                <Col>
                  <div className={companyStyles.profiles}>
                    <img
                      className={companyStyles.img}
                      src={baseUrl + v.images.map((v: any) => v.url)}
                      placeholder="blur"
                      height={120}
                      width={137}
                    />
                    <h6>{v.heading}</h6>
                    <p className={companyStyles.role}>{v.free_text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    case "successful_product":
      return (
        <div className={`${companyStyles.partner}`}>
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
          <Container>
            <Row>
              {carosel_cards.map((v: any) => (
                <Col md={3}>
                  <div className={companyStyles.logos}>
                    <img
                      className={companyStyles.images}
                      src={baseUrl + v.images.map((v: any) => v.url)}
                      placeholder="blur"
                      height={45}
                      width={137}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );

    case "technology_slack":
      return (
        <div className={`${companyStyles.tech_slack}`}>
          {free_text ? (
            <div className={`${companyStyles.heading}`}>
              <h2
                className={companyStyles.free_text}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              />
              {sub_heading && (
                <div
                  className={companyStyles.desc}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
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
              <Col md={6}>
                {web_front_end_title ? (
                  <div className={`${companyStyles.title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(web_front_end_title),
                      }}
                    />
                    {free_text && (
                      <div
                        className={companyStyles.desc}
                        dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                      ></div>
                    )}
                    <div className={companyStyles.company_cards}>
                      {carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6}>
                {web_back_end_title ? (
                  <div className={`${companyStyles.title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(web_back_end_title),
                      }}
                    />
                    {free_text && (
                      <div
                        className={companyStyles.desc}
                        dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                      ></div>
                    )}
                    <div className={companyStyles.company_cards}>
                      {Carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6}>
                {database_title ? (
                  <div className={`${companyStyles.title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(database_title),
                      }}
                    />
                    {database_para && (
                      <div
                        className={companyStyles.desc}
                        dangerouslySetInnerHTML={{
                          __html: marked(database_para),
                        }}
                      ></div>
                    )}
                    <div className={companyStyles.company_cards}>
                      {carosel_card.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6}>
                {android_title ? (
                  <div className={`${companyStyles.title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{
                        __html: marked(android_title),
                      }}
                    />
                    {android_para && (
                      <div
                        className={companyStyles.desc}
                        dangerouslySetInnerHTML={{
                          __html: marked(android_para),
                        }}
                      ></div>
                    )}
                    <div className={companyStyles.company_cards}>
                      {android_card.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6}>
                {ios_title ? (
                  <div className={`${companyStyles.title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{ __html: marked(ios_title) }}
                    />
                    {ios_para && (
                      <div
                        className={companyStyles.desc}
                        dangerouslySetInnerHTML={{ __html: marked(ios_para) }}
                      ></div>
                    )}
                    <div className={companyStyles.company_cards}>
                      {ios_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </Col>
              <Col md={6}>
                {devops_title ? (
                  <div className={`${companyStyles.title}`}>
                    <h2
                      className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{ __html: marked(devops_title) }}
                    />
                    {devops_para && (
                      <div
                        className={companyStyles.desc}
                        dangerouslySetInnerHTML={{
                          __html: marked(devops_para),
                        }}
                      ></div>
                    )}
                    <div className={companyStyles.company_cards}>
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
        <div className={`${companyStyles.career_open}`}>
          {home_banner[0] && (
            <Image
              loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
              src={baseUrl + home_banner[0].url}
              placeholder="blur"
              blurDataURL={baseUrl + home_banner[0].url}
              height={400}
              width={"100%"}
              className={companyStyles.bannerimg}
            />
          )}
          {free_text ? (
            <div className={companyStyles.free_text}>
              <h2 dangerouslySetInnerHTML={{ __html: marked(free_text) }} />
              {home_button && (
                <div className={companyStyles.button}>
                  {home_button.map((item: any) => (
                    <div className={companyStyles.call_to_action}>
                      {" "}
                      {item.call_to_action}{" "}
                    </div>
                  ))}
                </div>
              )}
              {sub_heading && (
                <div
                  className={companyStyles.descrption}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          ) : (
            " "
          )}
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
            infinite={false}
            keyBoardControl={true}
            customTransition="all 0.5s ease"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            className={styles.clientcarousel}
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
            {home_banner[0] && (
              <Image
                loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
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
          <div className={contactStyle.contact}>
            <div className={contactStyle.content}>
              <div>
                <h2>Looking for more assistance? </h2>
                <h4>Choose how you'd like to contact our Mail support:</h4>
              </div>

              <div className={contactStyle.tabsContainer}>
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Submit a form">
                    <div className={contactStyle.tab1}>
                      <div className="mb-5">
                        <h4>
                          Fill out this form and a support representative will
                          be in touch.
                        </h4>
                      </div>
                      <ContactForm />
                    </div>
                  </Tab>

                  <Tab eventKey="profile" title="Shoot us an Email">
                    <div className={contactStyle.tab2}>
                      <div>
                        <h4>
                          Send us an email with necessary screenshots and your
                          account details to:
                        </h4>
                        <div className={contactStyle.sendEmail}>
                          <Button variant="">
                            Support@hutechsolutions.com
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4>For sales enquiries, contact us at:</h4>
                        <div className={contactStyle.sendEmail}>
                          <Button variant="">sales@hutechsolutions.com</Button>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="contact" title="Give us a call">
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
                          <Col>USA +2874787284</Col>
                          <Col>India +91-2874787284</Col>
                        </Row>
                        <Row>
                          <Col>USA +2874787284</Col>
                          <Col>India +91-2874787284</Col>
                        </Row>
                        <Row>
                          <Col>USA +2874787284</Col>
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
          {home_banner[0] && (
            <Image
              loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
              src={baseUrl + home_banner[0].url}
              placeholder="blur"
              blurDataURL={baseUrl + home_banner[0].url}
              height={400}
              width={"100%"}
              className={companyStyles.bannerimg}
            />
          )}
          <div className={servicesStyles.banner_container}>
            {free_text && (
              <div className={servicesStyles.content}>
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
          <div className={`${servicesStyles.client_banner}`}>
            <div className={servicesStyles.clientContent}>
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
                {/* {home_banner[0] && (
                  <div className={`${servicesStyles.section3_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )} */}
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
        <div className={`${servicesStyles.Industries_banner}`}>
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
        <div className={`${servicesStyles.Industries_banner5}`}>
          <div className={`${servicesStyles.client_banner5}`}>
            <div className={servicesStyles.section5}>
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
          <div className={`${servicesStyles.flexContainer}`}>
            <div className={`${servicesStyles.imgColumn}`}>
              {home_banner[0] && (
                <div className={`${servicesStyles.section5_serviceimg}`}>
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
                    className={servicesStyles.section6_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
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
              <div className={servicesStyles.section6_imgages}>
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
                    className={servicesStyles.section7_title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
                    className={servicesStyles.section7_note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
              </div>
            </div>
            {
              <div className={servicesStyles.dev_process_card}>
                {carosel_cards[0] && (
                  <div className={servicesStyles.section7_img}>
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
                {/* {home_banner[0] && (
                  <div className={`${servicesStyles.section8_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )} */}
              </div>
            </div>
            {carosel_cards[0] && (
              <div className={servicesStyles.section8_img}>
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
              <div
                className={`${careerstyles.image} ${
                  image_position ? careerstyles[image_position] : ""
                } ${image_size ? careerstyles[image_size] : ""}`}
              >
                <Image
                  loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
                  src={baseUrl + home_banner[0].url}
                  placeholder="blur"
                  blurDataURL={baseUrl + home_banner[0].url}
                  height={500}
                  width={1440}
                />
              </div>
            )}
          </div>
          <div className={careerstyles.section1_centerText}>
            <div className={careerstyles.section1_subText1}>
              {free_text && (
                <div
                  className={careerstyles.title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </div>
            <div className={careerstyles.section1_subText2}>
              {sub_heading && (
                <div
                  className={careerstyles.note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          </div>
        </div>
      );

    case "culture_banner":
      return (
        <div className={`${careerstyles.culture_banner}`}>
          <div className={careerstyles.section2}>
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
              {home_button && (
                <div className={careerstyles.opening_btn}>
                  {home_button.map((item: any) => (
                    <div className={careerstyles.call_to_action}>
                      {" "}
                      {item.call_to_action}{" "}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={careerstyles.sec2_right}>
              {home_banner[0] && (
                <div
                  className={`${careerstyles.sec2_image} ${
                    image_position ? careerstyles[image_position] : ""
                  } ${image_size ? careerstyles[image_size] : ""}`}
                >
                  <Image
                    loader={() =>
                      myLoader((baseUrl + home_banner[0].url) as any)
                    }
                    src={baseUrl + home_banner[0].url}
                    placeholder="blur"
                    blurDataURL={baseUrl + home_banner[0].url}
                    height={445}
                    width={659}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      );

    case "feature_banner":
      return (
        <div className={`${careerstyles.main_sec3}`}>
          <div className={careerstyles.section3}>
            <div className={careerstyles.section3_subText1}>
              {free_text && (
                <div
                  className={careerstyles.section3_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </div>
            <div className={careerstyles.section3_subText2}>
              {sub_heading && (
                <div
                  className={careerstyles.section3_subText2_note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
              )}
            </div>
          </div>
          <div className={careerstyles.section3_subcards}>
            {carosel_cards[0] && (
              <div className={careerstyles.section3_cards}>
                {carosel_cards.map((_card: any, index: number) => (
                  <div style={{ marginLeft: "3%" }}>
                    <Card {..._card} key={index} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );

    case "current_opening_career":
      return (
        <div className={`${careerstyles.main_sec4}`}>
          <div className={careerstyles.section4}>
            <div className={careerstyles.section4_subText1}>
              {free_text && (
                <div
                  className={careerstyles.section4_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </div>
          </div>
          <div className={careerstyles.section4_subcards}>
            {carosel_cards[0] && (
              <div className={careerstyles.section4_cards}>
                {carosel_cards.map((_card: any, index: number) => (
                  <div style={{ marginLeft: "3%", marginRight: "3%" }}>
                    <Card {..._card} key={index} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );

    case "estimate_banner":
      return (
        <div className={`${careerstyles.main_sec5}`}>
          <div className={careerstyles.section5}>
            {estimate_image[0] && (
              <div
                className={`${careerstyles.image} ${
                  image_position ? careerstyles[image_position] : ""
                } ${image_size ? careerstyles[image_size] : ""}`}
              >
                <Image
                  loader={() =>
                    myLoader((baseUrl + estimate_image[0].url) as any)
                  }
                  src={baseUrl + estimate_image[0].url}
                  placeholder="blur"
                  blurDataURL={baseUrl + estimate_image[0].url}
                  height={360}
                  width={1510}
                />
              </div>
            )}
          </div>
          <div className={careerstyles.section5_centerText}>
            <div className={careerstyles.section5_subText1}>
              {Heading && (
                <div
                  className={careerstyles.section5_title}
                  dangerouslySetInnerHTML={{ __html: marked(Heading) }}
                ></div>
              )}
            </div>
            <div className={careerstyles.section5_subText2}>
              {free_text && (
                <div
                  className={careerstyles.note}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
            </div>
            <div className={careerstyles.section5_subText3}>
              <div className={careerstyles.Estimate_btn1}>
                {Estimated_buttons && (
                  <div>
                    {Estimated_buttons.map((item: any) => (
                      <div className={careerstyles.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                        <img
                          src={`${baseUrl}${Estimated_buttons[0].arrow_icon[0].url}`}
                          className={styles.arrowicon}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={careerstyles.section5_subText4}>
              <div>
                {para && (
                  <div
                    className={careerstyles.estimatenote}
                    dangerouslySetInnerHTML={{ __html: marked(para) }}
                  ></div>
                )}
              </div>
              <div>
                <img
                  src={`${baseUrl}${estimate_icon[0].url}`}
                  className={careerstyles.estimatearrowicon}
                />
              </div>
              <div>
                {Call_to_action && (
                  <div
                    className={careerstyles.estimatenote}
                    dangerouslySetInnerHTML={{ __html: marked(Call_to_action) }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      );

    case "qualification_banner":
      return (
        <div className={`${careerstyles.qualification_banner}`}>
          <div className={careerstyles.qualification_section2}>
            <div className={careerstyles.apply_left}>
              {User_Experience_Data[0] && (
                <div className={careerstyles.apply_section2_left}>
                  {User_Experience_Data.map((_card: any, index: number) => (
                    <div style={{ display: "block" }}>
                      <div style={{ display: "inline-block" }}>
                        {_card.title && (
                          <div
                            className={careerstyles.qualification_left_title}
                            dangerouslySetInnerHTML={{
                              __html: marked(_card.title),
                            }}
                          ></div>
                        )}
                      </div>
                      <div style={{ display: "inline-block" }}>
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
              <div className={careerstyles.apply_heading}>Apply Now</div>
              <CareerForm />
            </div>
          </div>
        </div>
      );

      case "portfolio_banner":
        return (
          <div className={portfolioStyles.portfolio_section1}>
          {home_banner[0] && (
              <Image
                loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
                src={baseUrl + home_banner[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + home_banner[0].url}
                height={500}
                width={"100%"}
                className={companyStyles.bannerimg}
              />
           
          )}
          <div className={portfolioStyles.banner_container}>
          {free_text &&(
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
            <div className={`${portfolioStyles.Industries_banner}`}>
              <div className={`${portfolioStyles.client_banner}`}>
                <div className={portfolioStyles.clientContent}>
                {free_text && (
                <div
                  className={portfolioStyles.portfolio_title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={portfolioStyles.portfolio_note}
                  dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                ></div>
                
              )}
                </div>
              </div>
              { <div className={portfolioStyles.porfolio_card}>
        {carosel_cards[0] && (
          <div className={portfolioStyles.portfolio_img}>
            {carosel_cards.map((_card: any, index: number) => (
              <Card {..._card} key={index} />
            ))}
          </div>
        )}
        </div> }
              
            </div>
            </div>
          );

          case "portfolio_sub_banner":
          return (
            <div className={`${portfolioStyles.porfolioDetails_card_section}`}>
            <div className={`${portfolioStyles.Industries_section1}`}>
            { <div className={portfolioStyles.porfolio_details_cards}>
        {carosel_cards[0] && (
          <div className={portfolioStyles.porfolioDetails_img}>
            {carosel_cards.map((_card: any, index: number) => (
              <Card {..._card} key={index} />
            ))}
          </div>
        )}
        </div> }
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

    default:
      return <div>Default</div>;
  }
  <div>
    <Footer />
  </div>;
};
export default Section;
