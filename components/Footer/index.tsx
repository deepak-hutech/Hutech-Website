import marked from "marked";
import { NextPage } from "next";
import { ImageLoader } from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import strings from "../../public/strings.json";
import styles from "../../styles/Footer.module.css";

const { baseUrl } = strings;
const myLoader: ImageLoader = (url: any) => {
  return url;
};

const GetAction = ({ type, display, group, icon }: any) => {
  switch (type) {
    case "hyperlink":
      return (
        <div className={styles.footerMenuOne}>
          <div>
            <img src={`${baseUrl}${icon?.url}`} />
            <h2>{display}</h2>
          </div>

          {group.map(({ title }: any) => (
            <a href="/">{title}</a>
          ))}
        </div>
      );
    // case "hyperlink": return (
    //     <div className={styles.footerMenuTwo}>
    //         <h2>{display}</h2>
    //         <div className={styles.footerMenuContainer}>
    //             {
    //                 group.map(({ title, action }: any) => (
    //                     <div className={styles.subMenu}>
    //                         <h3>{title}</h3>
    //                         {action?.map(({ display }: any) => (
    //                             <a href="/">{display}</a>
    //                         ))}
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     </div>
    // );
  }
};

const Footer: NextPage = (props: any) => {
  const {
    action,
    freetext,
    note,
    link,
    weblinks,
    footerLogo,
    footer_three,
    footer_action,
    phone_no,
    Skype_id,
    mail,
    social_icon,
  } = props;

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerCon}>
          <Row>
            {footer_action.map(
              ({ link, display, group, icon }: any, index: any) => (
                <Col sm={12} md={6} lg={3}>
                  <div className={styles.footerContainer}>
                    <div key={index} className={styles.heading}>
                      {display}
                    </div>

                    <div key={index} className={styles.sub_heading}>
                      {group.map((v: any) => (
                        <div className={styles.footersubheading}>
                          <img src={`${baseUrl}${v.icon[0]?.url}`} />
                          {v.title === "address" ? (
                            <span  dangerouslySetInnerHTML={{ __html: marked(v.freetext )}}></span>
                          ) : (
                            <a href={v.link} className={styles.footerlink}>{v.freetext}</a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              )
            )}
          </Row>
          <hr className={styles.divider}></hr>
          <div className={styles.iconsContainer}>
            <p className={styles.terms}>
              Terms and Conditions | Privacy Policy | Disclaimer
            </p>
            <div className={styles.item}>
              {social_icon.map(({ display, icon }: any, index: any) => (
                <div>
                  <div key={index}>
                    <div>
                      <img src={`${baseUrl}${icon[0]?.url}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.copyRight}>
            Copyright © 2019 - 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
