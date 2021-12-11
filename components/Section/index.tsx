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
import {Tabs ,Tab, Form, Button, Row, Col,Container} from "react-bootstrap"
import ContactForm from "../ContactForm"
import servicesStyles from "../../styles/Services.module.css";

const myLoader: ImageLoader = (url: any) => {
  return url;
};

const Section: NextPage = (props: any) => {
  const {
    home_banner,
    home_button,
    sub_heading,
    small_card,
    type,
    title,
    image_size,
    subtitle,
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
    acordian,
    carosel_cards,
    Carosel_cards,
    carosel_card,
    descrption,
    note_descrption,
    media,
    call_to_action,
    note,
    header,
    footer,
    buttons,
    card_free_text,
    arrow_icon,
    subTitle,
    down_arrow,
    offer,
    para,
    servicecarosel
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
          
          {free_text &&(
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
                  <div className={styles.call_to_action}>
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
            <div className={styles.capabilities_cards}>
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
          {free_text &&(
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
                        dangerouslySetInnerHTML={{ __html: marked(free_text) }}>
                      </div>
                    )}
              </Row>
            </Container>
            
            <Container>
              <Row>
                <Col>
                  {home_banner[0] && (
                    <div
                      className={`${companyStyles.abt_img}`}>
                    <Image
                      loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
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
        )
    
        case "values_vision_mission": 
        return (
          <div className={companyStyles.values_vision}>
             <Container >
               <Row>
                  {carosel_cards.map((v:any) => (
                     <Col>
                     <img className={companyStyles.profile}
                                src={baseUrl + v.images.map((v:any)=> v.url)}
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
        )
    
        case "our_people": 
        return (
          <div className={companyStyles.our_people}>
             <Container>
                <Row>
                    {free_text && (
                    <div className={companyStyles.free_text}
                      dangerouslySetInnerHTML={{ __html: marked(free_text) }}>
                    </div>
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
                      {carosel_cards.map((v:any) => (
                        <Col>
                            <div className={companyStyles.profiles}>
                            <img className={companyStyles.img}
                                src={baseUrl + v.images.map((v:any)=> v.url)}
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
        )
        case "successful_product":
          return (
            <div className={`${companyStyles.partner}`}>
              {free_text &&  (
                <div className={`${companyStyles.heading}`}
                     dangerouslySetInnerHTML={{ __html: marked(free_text) }}>
                </div>
              )}
              {sub_heading && (
                  <div
                    className={companyStyles.desc}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
            <Container>
                  <Row>
                      {carosel_cards.map((v:any) => (
                        <Col md={3}>
                            <div className={companyStyles.logos}>
                              <img className={companyStyles.images}
                                src={baseUrl + v.images.map((v:any)=> v.url)}
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
                  ) : " "}
              </div>
            )

            case "web_frontend":
              return (
                <div className={`${companyStyles.web_dev}`}>
                   <Container>
                      <Row>
                      <Col md={6}>{ web_front_end_title ? (
                          <div className={`${companyStyles.title}`}>
                              <h2
                                className={companyStyles.free_text}
                                dangerouslySetInnerHTML={{ __html: marked(web_front_end_title) }}
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
                            
                          ) : " "}</Col>
                        <Col md={6}>{ web_back_end_title ? (
                          <div className={`${companyStyles.title}`}>
                              <h2
                                className={companyStyles.free_text}
                                dangerouslySetInnerHTML={{ __html: marked(web_back_end_title) }}
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
                          ) : " "}</Col>
                          <Col md={6}>{ database_title ? (
                          <div className={`${companyStyles.title}`}>
                              <h2
                                className={companyStyles.free_text}
                                dangerouslySetInnerHTML={{ __html: marked(database_title) }}
                              />
                              {database_para && (
                                <div
                                  className={companyStyles.desc}
                                  dangerouslySetInnerHTML={{ __html: marked(database_para) }}
                                ></div>
                              )}
                               <div className={companyStyles.company_cards}>
                                  {carosel_card.map((_card: any, index: number) => (
                                      <Card {..._card} key={index} />
                                    ))}
                               </div>
                            </div>
                          ) : " "}</Col>
                          <Col md={6}>{ android_title ? (
                          <div className={`${companyStyles.title}`}>
                              <h2
                                className={companyStyles.free_text}
                                dangerouslySetInnerHTML={{ __html: marked(android_title) }}
                              />
                              {android_para && (
                                <div
                                  className={companyStyles.desc}
                                  dangerouslySetInnerHTML={{ __html: marked(android_para) }}
                                ></div>
                              )}
                              <div className={companyStyles.company_cards}>
                                  {android_card.map((_card: any, index: number) => (
                                      <Card {..._card} key={index} />
                                    ))}
                               </div>
                            </div>
                          ) : " "}</Col>
                           <Col md={6}>{ ios_title ? (
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
                          ) : " "}</Col>
                          <Col md={6}>{ devops_title ? (
                          <div className={`${companyStyles.title}`}>
                              <h2
                                className={companyStyles.free_text}
                                dangerouslySetInnerHTML={{ __html: marked(devops_title) }}
                              />
                              {devops_para && (
                                <div
                                  className={companyStyles.desc}
                                  dangerouslySetInnerHTML={{ __html: marked(devops_para) }}
                                ></div>
                              )}
                               <div className={companyStyles.company_cards}>
                                  {devops_cards.map((_card: any, index: number) => (
                                      <Card {..._card} key={index} />
                                    ))}
                               </div>
                            </div>
                          ) : " "}</Col>
                      </Row>
                   </Container>
                </div>
              )

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
                      <h2
                        dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                      />
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
                  ) : " "}
                </div>
                )


    case "home_blog":
      return (
        <div className={`${styles.blog_banner}`}>
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
          {free_text &&(
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
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="home" title="Submit a form">
                        <div className={contactStyle.tab1}>
                          <div className="mb-5">
                            <h4>Fill out this form and a support representative will be in touch.</h4>
                          </div>
                          <ContactForm />
                        </div>
                      </Tab>

                      <Tab eventKey="profile" title="Shoot us an Email">
                        <div className={contactStyle.tab2}>
                              <div>
                                <h4>
                                      Send us an email with necessary screenshots and your account details to:
                                </h4>
                                <div className={contactStyle.sendEmail}>
                                  <Button variant="">Support@hutechsolutions.com</Button>
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
                                <p>(Call support available only for paid users of Hutech Mail)</p>
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
            <div className={`${servicesStyles.section1}`}>
            <div className={`${servicesStyles.Industries_banner}`}>
              <div className={`${servicesStyles.client_banner}`}>
                <div className={servicesStyles.clientContent}>
                  {free_text && (
                    <div
                      className={servicesStyles.section1_title}
                      dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                    ></div>
                  )}
                  {sub_heading && (
                    <div
                      className={servicesStyles.section1_note}
                      dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                    ></div>
                  )}
                            {home_banner[0] && (
                  <div className={`${servicesStyles.section1_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )}
                </div>
              </div>
              {/* <div className={styles.capabilities_cards}>
              {carosel_cards.map((_card: any, index: number) => (
                  <Card {..._card} key={index} />
                ))}
              </div> */}
         {home_button && (
                    <div className={servicesStyles.section1_buttons}>
                    {home_button.map((item: any) => (
                      <div className={servicesStyles.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                      </div>
                    ))}
                  </div>
                )}
            </div>
            </div>
          );
          case "mobile_app_development":
            return (
              <div className={`${servicesStyles.Industries_banner}`}>
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
                                                              {home_banner[0] && (
                  <div className={`${servicesStyles.section3_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )}
                    </div>
                  </div>
                  { <div className={servicesStyles.mobile_app_development_card}>
                  {carosel_cards[0] && (
                    <div className={servicesStyles.section3_card}>
                      {carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  )}
                  </div> }
                </div>
                </div>
              );
    
              case "dedicated_developer":
              return (
                <div className={`${servicesStyles.Industries_banner}`}>
                  <div className={`${servicesStyles.client_banner}`}>
                    <div className={servicesStyles.clientContent}>
                      {free_text && (
                        <div
                          className={servicesStyles.section4_title}
                          dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                        ></div>
                      )}
                      {sub_heading && (
                        <div
                          className={servicesStyles.note2}
                          dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                        ></div>
                        
                      )}
                    </div>
                  </div>
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
              );
    
              case "custom_mobile_app":
                return (
                  <div className={`${servicesStyles.Industries_banner}`}>
                    <div className={`${servicesStyles.client_banner}`}>
                      <div className={servicesStyles.clientContent}>
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
                          >
    
                          </div>
                        )}
                                                {home_banner[0] && (
                  <div className={`${servicesStyles.section5_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )}
                      </div>
                    </div>
                    { <div className={servicesStyles.custom_mobile_card}>
                  {carosel_cards[0] && (
                    <div className={servicesStyles.section5}>
                      {carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  )}
                  </div> }
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
                                                                  {home_banner[0] && (
                  <div className={`${servicesStyles.section6_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )}
                    </div>
                  </div>
                  <Container>
                    <Row>
                      <Col>
                  { <div className={servicesStyles.mobile_tech_card}>
                  {carosel_cards[0] && (
                    <div className={servicesStyles.section6_imgages}>
                      {carosel_cards.map((_card: any, index: number) => (
                        <Card {..._card} key={index} />
                      ))}
                    </div>
                  )}
                  </div> }
                     </Col>
                  </Row>
                  </Container>
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
                    { <div className={servicesStyles.dev_process_card}>
                    {carosel_cards[0] && (
                      <div className={servicesStyles.section7_img}>
                        {carosel_cards.map((_card: any, index: number) => (
                          <Card {..._card} key={index} />
                        ))}
                      </div>
                    )}
                    </div> }
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
                          {home_banner[0] && (
                  <div className={`${servicesStyles.section8_serviceimg}`}>
                    <img src={baseUrl + home_banner[0].url} />
                  </div>
                )}
                        </div>
                      </div>
                      { <div className={servicesStyles.our_work_card}>
                      {carosel_cards[0] && (
                        <div className={servicesStyles.section8_img}>
                          {carosel_cards.map((_card: any, index: number) => (
                            <Card {..._card} key={index} />
                          ))}
                        </div>
                      )}
                      </div> }
                      
                    </div>
                    </div>
                  );
    
    
    default:
      return <div>Default</div>;
  }
  <div>
    <Footer/>
  </div>
};
export default Section;




