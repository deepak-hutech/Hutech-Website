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
import { Container, Col, Row } from 'react-bootstrap';
import Footer from "../Footer";

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
      items: 2,
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
        <div >
            {free_text && (
              <div
                className={styles.title}
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
          <div >
              {free_text && (
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                ></div>
              )}
              {sub_heading && (
                <div
                  className={styles.title}
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
//     case "career_banner":
//       return (
//         <div className={`${styles.career_banner}`}>
//           {media[0] && (
//             <div
//               className={`${styles.image} ${
//                 image_position ? styles[image_position] : ""
//               } ${image_size ? styles[image_size] : ""}`}
//             >
//               <Image
//                 loader={() => myLoader((baseUrl + media[0].url) as any)}
//                 src={baseUrl + media[0].url}
//                 placeholder="blur"
//                 blurDataURL={baseUrl + media[0].url}
//                 height={434}
//                 width={526}
//               />
//             </div>
//           )}
//           <div className={styles.careerContent}>
//             {title && (
//               <div
//                 className={styles.title}
//                 dangerouslySetInnerHTML={{ __html: marked(title) }}
//               ></div>
//             )}
//             {note_descrption && (
//               <div
//                 className={styles.note}
//                 dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
//               ></div>
//             )}
//             {free_text && (
//               <div
//                 className={styles.freetext}
//                 dangerouslySetInnerHTML={{ __html: marked(free_text) }}
//               ></div>
//             )}
//             {buttons && (
//               <div className={styles.buttons}>
//                 {buttons.map((item: any) => (
//                   <div className={styles.call_to_action}>
//                     {" "}
//                     {item.call_to_action}{" "}
//                     <img
//                       src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
//                       className={styles.arrowicon}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       );

//     case "client_banner":
//       return (
//         <div className={`${styles.client}`}>
//           <div className={`${styles.client_banner}`}>
//             <div className={styles.clientContent}>
//               {title && (
//                 <div 
//                   className={styles.title}
//                   dangerouslySetInnerHTML={{ __html: marked(title) }}
//                 ></div>
//               )}
//               {note_descrption && (
//                 <div
//                   className={styles.note}
//                   dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
//                 ></div>
//               )}
//             </div>
//             {media[0] && (
//               <div className={`${styles.downArrow}`} >
//                 <img src={baseUrl + media[0].url} />
//               </div>
//             )}
//           </div>

//           {carosel_cards[0] && (
//             <div>{cards.map((_card: any, index: number) => (
//               <Card {..._card} key={index} />
//             ))}</div>
//           )}
//         </div>
//       );
//     case "service_banner":
//       return (
//         <div style={{ width: "100%" }}>
//           <div className={`${styles.service_banner}`}>
//             {media[0] && (
//               <div className={styles.services} data-scroll data-scroll-speed="1">
//                 <img
//                   src={baseUrl + media[0].url}
//                   className={styles.bannerimg}
//                 />
//                 {note_descrption && (
//                   <div
//                     className={styles.note_descrption}
//                     dangerouslySetInnerHTML={{
//                       __html: marked(note_descrption),
//                     }}
//                   ></div>
//                 )}
//                 {buttons && (
//                   <div className={styles.buttons}>
//                     {buttons.map((item: any) => (
//                       <div className={styles.call_to_action}>
//                         {" "}
//                         {item.call_to_action}{" "}
//                         <img
//                           src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
//                           className={styles.arrowicon}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//             <div className={styles.accordion}>
//             <div className={styles.accordion_head}  >
//               {acordian &&
//                 acordian.map((acordian: any, index: number) => (
//                   <Accordian {...acordian} key={index} />
//                 ))}
//             </div>
//           </div>
//           </div>
          
//         </div>
//       );
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
                      <p
                        className={companyStyles.heading}>
                        {free_text.split('\n').map((str: any) => 
                        <p>{str}</p>)}
                      </p>
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
                  <div className={companyStyles.free_text}>
                    {free_text && (
                        <h2
                          dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                        ></h2>
                      )}
                  </div>
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
                              <p className={companyStyles.role}>{v.para}</p>
                            </div>
                        </Col>
                       ))}
                  </Row>
            </Container>
          </div>
        )

        case "partner":
          return (
            <div className={`${companyStyles.partner}`}>
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

        case "career_banner":
        return (
          <div className={`${styles.Industries_banner}`}>
            <div className={`${styles.client_banner}`}>
              <div className={styles.clientContent}>
                {free_text && (
                  <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                  ></div>
                )}
                {sub_heading && (
                  <div
                    className={styles.note}
                    dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                  ></div>
                )}
                {home_banner[0] && (
                 <div className={`${styles.downArrow}`} >
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

//     case "blog":
//       return (
//         <div className={`${styles.blog_banner}`}>
//           <div className={`${styles.client_banner}`}>
//             <div className={styles.clientContent}>
//               {title && (
//                 <div
//                   className={styles.title}
//                   dangerouslySetInnerHTML={{ __html: marked(title) }}
//                 ></div>
//               )}
//               {note_descrption && (
//                 <div
//                   className={styles.note}
//                   dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
//                 ></div>
//               )}
//             </div>
//             {media[0] && (
//               <div className={`${styles.downArrow}`} >
//                 <img src={baseUrl + media[0].url} />
//               </div>
//             )}
//           </div>

//           <Carousel
//             swipeable={true}
//             draggable={false}
//             showDots={false}
//             responsive={responsive_wide_cards}
//             ssr={true} // means to render carousel on server-side.
//             infinite={false}
//             keyBoardControl={true}
//             customTransition="all 0.5s ease"
//             transitionDuration={1000}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             dotListClass="custom-dot-list-style"
//             // itemClass="carousel-item-padding-40-px"
//             className={styles.clientcarousel}
//           >
//             {cards.map((_card: any, index: number) => (
//               <Card {..._card} key={index} />
//             ))}
//           </Carousel>

//           {buttons && (
//             <div className={styles.buttons}>
//               {buttons.map((item: any) => (
//                 <div className={styles.call_to_action}>
//                   {" "}
//                   {item.call_to_action}{" "}
//                   <img
//                     src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
//                     className={styles.arrowicon}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       );
   
//     case "offre_banner":
//       return (
//         <div className={styles.services}>
//           <div className={styles.servicesleft}>
//             {title && (
//               <div
//                 className={styles.title}
//                 dangerouslySetInnerHTML={{ __html: marked(title) }}
//               ></div>
//             )}
//             {card_free_text && (
//               <div
//                 className={styles.subtitle}
//                 dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
//               ></div>
//             )}
//           </div>
//           <div className={styles.servicesRight}>
//             <div className={styles.container}>
//               {subTitle && (
//                 <div
//                   className={styles.subTitle}
//                   dangerouslySetInnerHTML={{ __html: marked(subTitle) }}
//                 ></div>
//               )}

//               {down_arrow[0] && (
//                 <div className={`${styles.servicedownArrow}`}>
//                   <img src={baseUrl + down_arrow[0].url} />
//                 </div>
//               )}
//             </div>

//             {media[0] && (
//               <div className={`${styles.serviceimg}`}>
//                 <img src={baseUrl + media[0].url} />
//               </div>
//             )}
//             {free_text && (
//               <div
//                 className={styles.servicedescrption}
//                 dangerouslySetInnerHTML={{ __html: marked(free_text) }}
//               ></div>
//             )}
//             <div></div>
//           </div>
//         </div>
//       );
//     case "stats_banner":
//       return (
//         <div className={styles.stats_banner}>
//           <div className={styles.status}>
//             {card_free_text && (
//               <div
//                 className={styles.title}
//                 dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
//               ></div>
//             )}
//             {offer.map((item: any) => (
//               <div className={styles.offer}>
//                 <h3>{item.title} </h3>
//                 <p>{item.para}</p>
//                 <hr className={styles.border} />
//               </div>
//             ))}
//           </div>
//         </div>
//       );
    
//     case "team_capabilities":
//       return (
//         <div className={styles.team_capabilities}>
//           <div className={styles.appContainer}>
//             {title && (
//               <div
//                 className={styles.title}
//                 dangerouslySetInnerHTML={{ __html: marked(title) }}
//               ></div>
//             )}
//             {subTitle && (
//               <div
//                 className={styles.teamsubTitle}
//                 dangerouslySetInnerHTML={{ __html: marked(subTitle) }}
//               ></div>
//             )}
//             <div>
//               {offer.map((offer: any) => (
//                 <Mobapp {...offer} />
//               ))}
//             </div>
//             <div className={styles.teamProcess}>
//               {card_free_text && (
//                 <div
//                   className={styles.teamcardtitle}
//                   dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
//                 ></div>
//               )}
//               {free_text && (
//                 <div
//                   className={styles.teamcardpara}
//                   dangerouslySetInnerHTML={{ __html: marked(free_text) }}
//                 ></div>
//               )}
//             </div>

//             {media[0] && (
//               <div className={`${styles.team_capabilitiesimg}`}>
//                 <img src={baseUrl + media[0].url} />
//               </div>
//             )}
//           </div>
//         </div>
//       );
//       case "service_carosel_banner":
//       return (
//         <div className={`${styles.service_carosel_banner}`}>
//           {title && (
//                 <div
//                   className={styles.processtitle}
//                   dangerouslySetInnerHTML={{ __html: marked(title) }}
//                 ></div>
//               )}
// {card_free_text && (
//                 <div
//                   className={styles.card_free_text}
//                   dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
//                 ></div>
//               )}
//           <Carousel
//             swipeable={true}
//             draggable={false}
//             showDots={false}
//             responsive={responsive_service_cards}
//             ssr={true} // means to render carousel on server-side.
//             infinite={false}
//             keyBoardControl={true}
//             customTransition="all 0.5s ease"
//             transitionDuration={1000}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             dotListClass="custom-dot-list-style"
//             // itemClass="carousel-item-padding-40-px"
//             className={styles.clientcarousel}
//           >
//             {servicecarosel.map((_card: any, index: number) => (
//               <Card {..._card} key={index} />
//             ))}
//           </Carousel>
//         </div>
//       );
    // case "free_banner": return (<div className={`${styles.free_banner}`}>
    //     {header && <div className={styles.header} dangerouslySetInnerHTML={{ __html: marked(header) }}></div>}
    //     <div className={styles.card_container}>
    //         {cards.map((card: any, index: number) => (<Card {...card} index={index} />))}
    //     </div>
    //     {footer && <div className={styles.footer} dangerouslySetInnerHTML={{ __html: marked(footer) }}></div>}
    // </div>);
    // case "info_banner": return (<div className={`${styles.info_banner}`}>
    //     {title && <p className={styles.title}>{title}</p>}
    //     {note_descrption && <div className={styles.descrption} dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}></div>}
    // </div>);
    // case "section_five": return (<div className={`${styles.section_five}`}>
    //     {title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: marked(title) }}></div>}
    //     {descrption && <div className={styles.descrption} dangerouslySetInnerHTML={{ __html: marked(descrption) }}></div>}
    // </div>);
    default:
      return <div>Default</div>;
  }
  <div>
    <Footer/>
  </div>
};
export default Section;




