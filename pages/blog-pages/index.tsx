import marked from "marked";
import type { GetStaticProps, NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import Breadcrumbs from "nextjs-breadcrumbs";
import { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import BlogSection from "../../components/Blog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import strings from "../../public/strings.json";
import blogStyle from "../../styles/blog.module.css";
import careerstyles from "../../styles/Careers.module.css";
import styles from "../../styles/Section.module.css";
import servicesStyles from "../../styles/Services.module.css";

import Link from "next/link";
// import "./bootstrap.min.css";
import companyStyles from "../../styles/Company.module.css";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const { baseUrl } = strings;
const myLoaderbanner: ImageLoader = (url: any) => {
  return url;
};
const AllBlogs: NextPage<{
  header: any;
  footer: any;
  blogs: any;
  blogBanner: any;
}> = (props) => {
  const PAGE_SIZE = 6;
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { header, footer, blogs, blogBanner } = props;
  const [pageNum, setPageNum] = useState(1);
  const pageCount = Math.ceil(blogs.length / PAGE_SIZE);

  //When new page selected in paggination, we take current path and query parrams.
  // Then add or modify page parram and then navigate to the new route.
  const pagginationHandler = (page: any) => {
    setPageNum(page.selected + 1);
  };

  const dataToShow = blogs.slice(
    (pageNum - 1) * PAGE_SIZE,
    pageNum * PAGE_SIZE
  );
  console.log(blogs);
  console.log(dataToShow);

  return (
    <div ref={scrollRef} className="root">
      <Header {...header} />
      <div className={companyStyles.blog_banner}>
        <div className={companyStyles.blog_banner_web}>
          <Image
            loader={() =>
              myLoaderbanner(
                (baseUrl + blogBanner[0].content[0].home_banner[0].url) as any
              )
            }
            src={baseUrl + blogBanner[0].content[0].home_banner[0].url}
            placeholder="blur"
            blurDataURL={baseUrl + blogBanner[0].content[0].home_banner[0].url}
            height={400}
            width={"100%"}
            className={companyStyles.bannerimg}
          />
        </div>
        <div className={servicesStyles.dotsmoveTop}></div>
        <div className={servicesStyles.dotsmoveBottom}></div>

        <div className={companyStyles.banner_container}>
          <div className={companyStyles.content}>
            <div className={blogStyle.blogfree_text}>
              {blogBanner[0].content[0].free_text}
            </div>

            <div
              className={companyStyles.descrption}
              dangerouslySetInnerHTML={{
                __html: marked(blogBanner[0].content[0].sub_heading),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={blogStyle.blog_bredcrumb}>
        <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
      </div>
      <div className={blogStyle.blogCards}>
        {dataToShow.map((val: any) => (
          <div key={val.uid} className={blogStyle.allBlogs}>
            <BlogSection {...val} />
          </div>
        ))}
      </div>
      <section>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          activeClassName={"active"}
          containerClassName={"pagination"}
          initialPage={pageNum - 1}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pagginationHandler}
        />
      </section>
      <div className={careerstyles.section5}>
        <div className={careerstyles.section5_banner_web}>
          <Image
            loader={() =>
              myLoaderbanner(
                (baseUrl +
                  blogBanner[0].content[1].estimate_image[0].url) as any
              )
            }
            src={baseUrl + blogBanner[0].content[1].estimate_image[0].url}
            placeholder="blur"
            blurDataURL={
              baseUrl + blogBanner[0].content[1].estimate_image[0].url
            }
            height={360}
            width={"100%"}
            className={careerstyles.estimatebannerimg}
          />
        </div>

        <div className={careerstyles.section5_centerText}>
          <div className={blogStyle.section5_subText1}>
            {blogBanner[0].content[1].Heading}
          </div>

          <div className={blogStyle.section5_subText2}>
            {blogBanner[0].content[1].free_text}
          </div>
          <div className={styles.companycall_to_action}>
            <Link href={`/contact-us`}>
              <a>
                {blogBanner[0].content[1].Estimated_buttons[0].call_to_action}
                <img
                  src={`${baseUrl}${blogBanner[0].content[1].Estimated_buttons[0].arrow_icon[0].url}`}
                  className={careerstyles.estimatearrowicon}
                />
              </a>
            </Link>
          </div>

          <div className={careerstyles.section5_subText4}>
            <div className={careerstyles.estimatenote}>
              {blogBanner[0].content[1].para}
            </div>

            <img
              src={`${baseUrl}${blogBanner[0].content[1].estimate_icon[0].url}`}
              className={careerstyles.estimatearrowicon}
            />

            <div className={careerstyles.estimatenote}>
              {" "}
              {blogBanner[0].content[1].Call_to_action}
            </div>
          </div>
        </div>
        <div className={companyStyles.bottom_banner_dotsmoveTop}></div>
        <div className={companyStyles.bottom_banner_dotsmoveBottom}></div>
      </div>

      <Footer {...footer} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ query }: any) => {
  try {
    const headerResult = await fetch(`${baseUrl}/header`);
    const blogResult = await fetch(`${baseUrl}/blog-pages`);
    const blogBannerRes = await fetch(`${baseUrl}/pages/?uid=blog-1`);
    const footerResult = await fetch(`${baseUrl}/footer`);
    const header: any = await headerResult.json();
    const allBlogs: any = await blogResult.json();
    const blogBanner: any = await blogBannerRes.json();

    const footer: any = await footerResult.json();

    return {
      props: { header, footer, blogs: allBlogs, blogBanner },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default AllBlogs;
