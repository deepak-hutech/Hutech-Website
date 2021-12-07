import { NextPage } from "next";
import styles from "../../styles/Footer.module.css";
import Action from "../Actions";
import { baseUrl } from "../../public/strings.json";

const GetAction = ({ type, display, group }: any) => {
  switch (type) {
    case "hyperlink":
      return (
        <div className={styles.footerMenuOne}>
          <h2>{display}</h2>
          
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
    free_text,
    note,
    weblinks,
    footerLogo,
    footer_three,
    phone_no,
    Skype_id,
    mail,
  } = props;

  return (
    <div>
      {/* <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footernav}>
            <div>
              <a className={styles.logo} href={"/"}>
                <img src={`${baseUrl}${footerLogo.logo[0].url}`} />
              </a>
              <p>{note}</p>
            </div>
          </div>

          <div className={styles.footernavOne}>
            {action.map((action: any) => GetAction(action))}
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.container}>
          <div className={styles.footernavtwo}> */}
            {/* <a className={styles.logo} href={"/"}>
                <img src={Logo}/>
            </a> */}
          {/* </div>
          <div className={styles.footernavthree}>
            {footer_three.map(({ phone_no, mail, Skype_id }: any, index:any) => (
              <div key={index} className={styles.officedetails}>
                <span>Desk Phone: +91-<a> {phone_no}</a></span>
                <span>Mail: <a style={{color:"#0171C1"}}>{mail} </a></span>
                <a>Skype: {Skype_id}</a>
              </div>
              ))}
           
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.footerbottom}>
          <p>{free_text}</p>
        </div>
      </div> */}
    </div>
  );
};
export default Footer;
