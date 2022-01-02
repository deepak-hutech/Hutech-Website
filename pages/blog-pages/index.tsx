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
// import "./bootstrap.min.css";
import companyStyles from "../../styles/Company.module.css";





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
  const PAGE_SIZE = 3;
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { header, footer, blogs, blogBanner } = props;
  const [pageNum, setPageNum] = useState(1);
  const pageCount = Math.ceil(blogs.length / PAGE_SIZE);

  //When new page selected in paggination, we take current path and query parrams.
  // Then add or modify page parram and then navigate to the new route.
  const pagginationHandler = (page: any) => {
    setPageNum(page.selected + 1);
  };

  const dataToShow = blogs.slice((pageNum - 1) * PAGE_SIZE, pageNum * PAGE_SIZE);
  console.log(blogs);
  console.log(dataToShow);

  return (
    <div ref={scrollRef}>
      <Header {...header} />
      <div className={companyStyles.company_banner}>
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
      <div className={blogStyle.blog_bredcrumb} >
        <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 7% 8%",
          position: "relative",
          justifyContent: "center",
        }}
      >
        {dataToShow.map((val: any) => (
          <div key={val.uid} className={blogStyle.allBlogs}>
            <BlogSection {...val} />
          </div>
        ))}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
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
      </div>
      <div className={careerstyles.section5}>
        <div className={careerstyles.section5_banner_web}> 
        <Image
          loader={() =>
            myLoaderbanner(
              (baseUrl + blogBanner[0].content[1].estimate_image[0].url) as any
            )
          }
          src={baseUrl + blogBanner[0].content[1].estimate_image[0].url}
          placeholder="blur"
          blurDataURL={baseUrl + blogBanner[0].content[1].estimate_image[0].url}
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

          <div className={careerstyles.Estimate_btn1}>
            <div className={careerstyles.call_to_action}>
              {blogBanner[0].content[1].Estimated_buttons[0].call_to_action}
              <img
                src={`${baseUrl}${blogBanner[0].content[1].Estimated_buttons[0].arrow_icon[0].url}`}
                className={careerstyles.estimatearrowicon}
              />
            </div>
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
