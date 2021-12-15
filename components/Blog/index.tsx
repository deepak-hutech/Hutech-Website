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
import blogStyle from "../../styles/blog.module.css";
import CareerForm from "../careerForm/index.js";
import portfolioStyles from "../../styles/Portfolio.module.css";

import { Pagination } from "react-bootstrap";

const myLoader: ImageLoader = (url: any) => {
    return url;
  };

  
  const Blog: NextPage = (props: any) => {
    const {
      home_banner,
      home_button,
      sub_heading,
      type,
      Buttons,
  
      image_position,
      free_text,
      ios_para,
      devops_title,
      blogTitle,
      devops_para,
      blogimage,
  
      estimate_icon,
      BlogCards,
      User_Experience_Data,
      address,
      para,
    } = props;
  
  

    switch (type) {
         case "blog_banner":
            return (
            <div className={blogStyle.blog_banner}>
                {home_banner[0] && (
                    <Image
                    loader={() => myLoader((baseUrl + home_banner[0].url) as any)}
                    src={baseUrl + home_banner[0].url}
                    placeholder="blur"
                    blurDataURL={baseUrl + home_banner[0].url}
                    height={400}
                    width={"100%"}
                    className={blogStyle.bannerimg}
                        />
                )}
            <div className={blogStyle.banner_container}>
                {free_text &&(
                    <div className={blogStyle.content}>
                    <div
                      className={blogStyle.free_text}
                      dangerouslySetInnerHTML={{ __html: marked(free_text) }}
                    />
                    {sub_heading && (
                    <div
                        className={blogStyle.descrption}
                        dangerouslySetInnerHTML={{ __html: marked(sub_heading) }}
                    ></div>
                    )}
                    </div>
                    )}
                 </div>
            <div>
          </div>
             
        </div>
        );

        case "blog_banner_type":
        return (
            <div>
                {BlogCards && (
                <div className={blogStyle.blog_container}>
                    {BlogCards.map((v: any, index: number) => (
                      <div className={blogStyle.item}>
                        <Image
                            loader={() => myLoader((baseUrl + v.blogimage.map((v: any) => v.url)) as any)}
                            src={baseUrl + v.blogimage.map((v: any) => v.url)}
                            placeholder="blur"
                            blurDataURL={baseUrl + v.blogimage.map((v: any) => v.url)}
                            width={55}
                            height={55}
                            className={companyStyles.cardImg2}
                        />
                          <div className={blogStyle.subHeading}>
                            <h5>{v.blogtitle}</h5>
                            <p>{v.blogsubtitle}</p>
                            <p className={blogStyle.date}>{v.createdate}</p>
                          </div>
                    </div>
                    ))}
                </div>
            )}
             <div className={blogStyle.page}>
               <Pagination>
                    <Pagination.Prev />
                        <Pagination.Item key={1} active= {true}>
                            1
                        </Pagination.Item>
                        <Pagination.Item key={2}>
                            2
                        </Pagination.Item>
                        <Pagination.Item key={3}>
                            3
                        </Pagination.Item>
                    <Pagination.Next />
               </Pagination>
              </div>
        </div>
        );      
        
    default:
    return (
        <div>
              <div className={blogStyle.blog_details_container}>
                 <div className={blogStyle.research}>
                  <p>
                    Apple offers some of the prominent and commonly used products like the 
                    iPhone and the iPad that have changed our lives and the way we approach 
                    technology. Consider an iOS app development company in Bangalore. To build 
                    an iOS app, you need a lot of resources as well as a good knowledge of 
                    coding. If you have an idea for an app, 
                    here are the steps that will turn your concept into a viable solution. 
                  </p>
                  <h5>Research</h5>
                  <p>
                    Your research must give answers to the most probable questions among the 
                    users. Say, Why an iOS? iOS may be your favorite option. But, the matter 
                    is how the customers in the online market feel about iOS. You must know 
                    the pulse, trend, and preferences of the target audience, which is an 
                    important factor in deciding which operating system(s) to build for. 
                    Most iOS users tend to be younger and more affluent than Android users. 
                    When it comes to customization, iOS is more restrictive comparing 
                    Android in the online market.
                    At the same time, iOS is a better option when building a mCommerce.
                  </p>
                  <p>
                  To improve the features, developers transform the rough wireframes into 
                  concrete, a pre-beta product called a prototype. Its prime purpose is
                   testing and quality assurance. A prototype is executable model that 
                   can use in user testing, final design planning and assists in displaying 
                   all the features of your app. It also helps in testing by comparing your 
                   prototype to a competitor’s 
                  product that can aid you in identifying the weaknesses and strengths of your app. 
                  </p>
                   <div className={blogStyle.profile}>
                       samir kumar
                  </div> 
                </div>

                <div className={blogStyle.categories}>
                  <div>
                      <h3>Categories</h3>
                      <hr />
                    <div className={blogStyle.lists}>
                      <p>Design</p>
                      <p>Design</p>
                      <p>Design</p>
                      <p>Design</p>
                     </div>
                  </div>
                  <div>
                    <h3>Related articles</h3><hr />
                    <div className={blogStyle.lists}>
                      <p>How to choose the right MVP software development company?</p>
                      <p>How to choose the right MVP software development company?</p>
                      <p>How to choose the right MVP software development company?</p>
                      <p>How to choose the right MVP software development company?</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={blogStyle.related_posts}>

                <div className={blogStyle.heading}>
                    <h3>Related Posts</h3>
                </div>

                <div className={blogStyle.post_cards}>
                    <div className={blogStyle.cards_item}>
                        <h3>E-commerce development solutions and shopping cart software</h3>
                        <p>We offer a wide range of services for all needs and requirements such as online shopping, payment ga</p>
                    </div>
                    <div className={blogStyle.cards_item}>
                        <h3>E-commerce development solutions and shopping cart software</h3>
                        <p>We offer a wide range of services for all needs and requirements such as online shopping, payment ga</p>
                    </div>
                    <div className={blogStyle.cards_item}>
                        <h3>E-commerce development solutions and shopping cart software</h3>
                        <p>We offer a wide range of services for all needs and requirements such as online shopping, payment ga</p>
                    </div>
                </div>
              </div>


        </div>
    );
    }

      };
      
      
export default Blog;