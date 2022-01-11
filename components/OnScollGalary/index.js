import React, { useEffect, useRef, useState} from "react";

import Styles from "./OnScrollGalary.module.css";

// $(window)
//   .scroll(function () {
//     // selectors
//     var $window = $(window),
//       $body = $("body"),
//       $panel = $(".section");

//     // Change 33% earlier than scroll position so colour is there when you arrive.
//     var scroll = $window.scrollTop() + $window.height() / 3;

//     $(".section").removeClass("active");

//     $panel.each(function () {
//       var $this = $(this);

//       // if position is within range of this panel.
//       // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//       // Remember we set the scroll to 33% earlier in scroll var.
//       if (
//         $this.position().top <= scroll &&
//         $this.position().top + $this.height() > scroll
//       ) {
//         $this.addClass("active");
//       }
//     });
//   })
//   .scroll();

const OnScrollGalary = () => {
  const gallaryWapper = useRef();
  const [isFixed, setIsFixed] = useState(false);
  const onWindowScroll = (e) => {
    const { top } = gallaryWapper.current.getBoundingClientRect();
    console.log(top)
    if (top < 100) {
      setIsFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => onWindowScroll(e));
  }, [onWindowScroll]);

  return (
    <div
      className={`${Styles.wrapper} ${isFixed ? Styles.fixedGallary : ""}`}
      ref={gallaryWapper}
    >
      <div className={`${Styles.section}`}>
        <div className={Styles.section__img}>
          <div
            className={Styles.section__img__inner}
            style={{
              backgroundImage: `url("https://strapi.hutech.solutions/uploads/home_banner3_dbeea64147.jpg")`,
            }}
          ></div>
        </div>
        <div className={Styles.section__body}>
          <div className={Styles.section__text}>
            <h2>Section title 1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.section}>
        <div className={Styles.section__img}>
          <div
            className={Styles.section__img__inner}
            style={{
              backgroundImage: `url("https://strapi.hutech.solutions/uploads/home_banner3_dbeea64147.jpg")`,
            }}
          ></div>
        </div>
        <div className={Styles.section__body}>
          <div className={Styles.section__text}>
            <h2>Section title 2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnScrollGalary;
