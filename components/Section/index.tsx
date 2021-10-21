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
import "react-multi-carousel/lib/styles.css";

const myLoader: ImageLoader = (url: any) => {
  return url;
};

const Section: NextPage = (props: any) => {
  const {
    type,
    title,
    image_size,
    subtitle,
    image_position,
    free_text,
    cards,
    acordian,
    carosel_cards,
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
  } = props;
  console.log(props.acordian, "hii");
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
  const responsive_long_cards = {
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
  switch (type) {
    case "hero_banner":
      return (
        <div className={`${styles.hero_banner}`}>
          {media[0] && (
            <div
              className={`${styles.image} ${
                image_position ? styles[image_position] : ""
              } ${image_size ? styles[image_size] : ""}`}
            >
              <Image
                loader={() => myLoader((baseUrl + media[0].url) as any)}
                src={baseUrl + media[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + media[0].url}
                height={560}
                width={800}
              />
            </div>
          )}
          {free_text ? (
            <div className={styles.content}>
              <div
                className={styles.free_text}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              />
              {call_to_action && (
                <div className={styles.call_to_action}>{call_to_action}</div>
              )}
            </div>
          ) : (
            <div className={styles.content}>
              {descrption && (
                <div
                  className={styles.descrption}
                  dangerouslySetInnerHTML={{ __html: marked(descrption) }}
                ></div>
              )}
              {title && (
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: marked(title) }}
                ></div>
              )}
              {subtitle && (
                <div
                  className={styles.subtitle}
                  dangerouslySetInnerHTML={{ __html: marked(subtitle) }}
                ></div>
              )}
              {note_descrption && (
                <div
                  className={styles.note}
                  dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
                ></div>
              )}
              {buttons && (
                <div className={styles.buttons}>
                  {buttons.map((item: any) => (
                    <div className={styles.call_to_action}>
                      {" "}
                      {item.call_to_action}{" "}
                      <img
                        src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
                        className={styles.arrowicon}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    case "career_banner":
      return (
        <div className={`${styles.career_banner}`}>
          {media[0] && (
            <div
              className={`${styles.image} ${
                image_position ? styles[image_position] : ""
              } ${image_size ? styles[image_size] : ""}`}
            >
              <Image
                loader={() => myLoader((baseUrl + media[0].url) as any)}
                src={baseUrl + media[0].url}
                placeholder="blur"
                blurDataURL={baseUrl + media[0].url}
                height={434}
                width={526}
              />
            </div>
          )}
          <div className={styles.careerContent}>
            {title && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: marked(title) }}
              ></div>
            )}
            {note_descrption && (
              <div
                className={styles.note}
                dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
              ></div>
            )}
            {free_text && (
              <div
                className={styles.freetext}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            {buttons && (
              <div className={styles.buttons}>
                {buttons.map((item: any) => (
                  <div className={styles.call_to_action}>
                    {" "}
                    {item.call_to_action}{" "}
                    <img
                      src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
                      className={styles.arrowicon}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );

    case "client_banner":
      return (
        <div className={`${styles.client}`}>
          <div className={`${styles.client_banner}`}>
            <div className={styles.clientContent}>
              {title && (
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: marked(title) }}
                ></div>
              )}
              {note_descrption && (
                <div
                  className={styles.note}
                  dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
                ></div>
              )}
            </div>
            {media[0] && (
              <div className={`${styles.downArrow}`}>
                <img src={baseUrl + media[0].url} />
              </div>
            )}
          </div>

          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive_cards}
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
    case "service_banner":
      return (
        <div style={{ width: "100%" }}>
          <div className={`${styles.service_banner}`}>
            {media[0] && (
              <div className={styles.services}>
                <img
                  src={baseUrl + media[0].url}
                  className={styles.bannerimg}
                />
                {note_descrption && (
                  <div
                    className={styles.note_descrption}
                    dangerouslySetInnerHTML={{
                      __html: marked(note_descrption),
                    }}
                  ></div>
                )}
                {buttons && (
                  <div className={styles.buttons}>
                    {buttons.map((item: any) => (
                      <div className={styles.call_to_action}>
                        {" "}
                        {item.call_to_action}{" "}
                        <img
                          src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
                          className={styles.arrowicon}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.accordion}>
            <div className={styles.accordion_head}>
              {acordian &&
                acordian.map((acordian: any, index: number) => (
                  <Accordian {...acordian} key={index} />
                ))}
            </div>
          </div>
        </div>
      );
    case "Industries_banner":
      return (
        <div className={`${styles.Industries_banner}`}>
          <div className={`${styles.client_banner}`}>
            <div className={styles.clientContent}>
              {title && (
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: marked(title) }}
                ></div>
              )}
              {note_descrption && (
                <div
                  className={styles.note}
                  dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
                ></div>
              )}
            </div>
            {media[0] && (
              <div className={`${styles.downArrow}`}>
                <img src={baseUrl + media[0].url} />
              </div>
            )}
          </div>

          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive_long_cards}
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

    case "blog":
      return (
        <div className={`${styles.blog_banner}`}>
          <div className={`${styles.client_banner}`}>
            <div className={styles.clientContent}>
              {title && (
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: marked(title) }}
                ></div>
              )}
              {note_descrption && (
                <div
                  className={styles.note}
                  dangerouslySetInnerHTML={{ __html: marked(note_descrption) }}
                ></div>
              )}
            </div>
            {media[0] && (
              <div className={`${styles.downArrow}`}>
                <img src={baseUrl + media[0].url} />
              </div>
            )}
          </div>

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

          {buttons && (
            <div className={styles.buttons}>
              {buttons.map((item: any) => (
                <div className={styles.call_to_action}>
                  {" "}
                  {item.call_to_action}{" "}
                  <img
                    src={`${baseUrl}${buttons[0].arrow_icon[0].url}`}
                    className={styles.arrowicon}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    // case "stats_banner":
    //   return (
    //     <div className={`${styles.stats_banner}`}>
    //       {title && (
    //         <div
    //           className={styles.title}
    //           dangerouslySetInnerHTML={{ __html: marked(title) }}
    //         ></div>
    //       )}
    //       {subtitle && (
    //         <div
    //           className={styles.subtitle}
    //           dangerouslySetInnerHTML={{ __html: marked(subtitle) }}
    //         ></div>
    //       )}
    //       {descrption && (
    //         <div
    //           className={styles.descrption}
    //           dangerouslySetInnerHTML={{ __html: marked(descrption) }}
    //         ></div>
    //       )}
    //       <div className={styles.card_container}>
    //         {cards.map((card: any) => (
    //           <AssetCard {...card} />
    //         ))}
    //       </div>
    //     </div>
    //   );
    case "offre_banner":
      return (
        <div className={styles.services}>
          <div className={styles.servicesleft}>
            {title && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: marked(title) }}
              ></div>
            )}
            {card_free_text && (
              <div
                className={styles.subtitle}
                dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
              ></div>
            )}
          </div>
          <div className={styles.servicesRight}>
            <div className={styles.container}>
              {subTitle && (
                <div
                  className={styles.subTitle}
                  dangerouslySetInnerHTML={{ __html: marked(subTitle) }}
                ></div>
              )}

              {down_arrow[0] && (
                <div className={`${styles.servicedownArrow}`}>
                  <img src={baseUrl + down_arrow[0].url} />
                </div>
              )}
            </div>

            {media[0] && (
              <div className={`${styles.serviceimg}`}>
                <img src={baseUrl + media[0].url} />
              </div>
            )}
            {free_text && (
              <div
                className={styles.servicedescrption}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
            <div></div>
          </div>
        </div>
      );
    case "stats_banner":
      return (
        <div className={styles.stats_banner}>
          <div className={styles.status}>
            {card_free_text && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
              ></div>
            )}
            {offer.map((item: any) => (
              <div className={styles.offer}>
                <h3>{item.title} </h3>
                <p>{item.para}</p>
                <hr className={styles.border} />
              </div>
            ))}
          </div>
        </div>
      );
    case "key_solutions":
      return (
        <div className={styles.key_solutions}>
          {media[0] && (
            <div className={`${styles.serviceKeySolutionimg}`}>
              <img src={baseUrl + media[0].url} />
            </div>
          )}
          <div className={styles.key_solutions_textfild}>
          {card_free_text && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: marked(card_free_text) }}
              ></div>
            )}
            {free_text && (
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: marked(free_text) }}
              ></div>
            )}
          </div>
        </div>
      );
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
};
export default Section;
