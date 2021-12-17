import { NextPage } from "next";
import marked from "marked";
import styles from "../../styles/Footer.module.css";
import Action from "../Actions";
import { baseUrl } from "../../public/strings.json";
import { Container, Col, Row } from "react-bootstrap";
import vector2 from "../assets/vector2.svg";
import Image, { ImageLoader } from "next/image";

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
    weblinks,
    footerLogo,
    footer_three,
    footer_action,
    phone_no,
    Skype_id,
    mail,
  } = props;
  
  return (
    <div>
      <div className={styles.footer}>
        <Container>
          <Row>
            {footer_action.map(({ display, group, icon }: any, index: any) => (
              <Col>
                <div key={index} className={styles.heading}>
                  {display}
                </div>

                <div key={index} className={styles.sub_heading}>
                  {group.map((v: any) => {
                    
                    return (
                      <div className={styles.footersubheading} >
                        
                        <img src={`${baseUrl}${v.icon[0]?.url}`} /><div dangerouslySetInnerHTML={{ __html: marked(v.freetext)}}></div>
                        
                      </div>
                    );
                  })}
                </div>
              </Col>
            ))} 
          </Row>
        </Container>
        <hr className={styles.divider}></hr>
        <p className={styles.terms}>Terms and Conditions  |  Privacy Policy | Disclaimer</p>
        <p className={styles.copyRight}>Copyright © 2019 - 2021. All Rights Reserved.</p>
       </div>
    </div>
  );
};

export default Footer;
