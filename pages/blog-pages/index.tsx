import { useEffect, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import BlogSection from "../../components/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogStyle from "../../styles/blog.module.css";
import companyStyles from "../../styles/Company.module.css";
import Image, { ImageLoader } from "next/image";
import Breadcrumbs from "nextjs-breadcrumbs";
import { baseUrl } from "../../public/strings.json";
const myLoaderbanner: ImageLoader = (url: any) => {
  return url;
};
const AllBlogs: NextPage<{
  header: any;
  footer: any;
  blogs: any;
  blogBanner: any;
}> = (props) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { header, footer, blogs, blogBanner } = props;
  console.log(blogBanner[0], "ppp");

  return (
    <div ref={scrollRef}>
      <Header {...header} />
      <div className={companyStyles.company_banner}>
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

        <div className={companyStyles.banner_container}>
          <div className={companyStyles.content}>
            <div className={companyStyles.free_text}>
              {blogBanner[0].content[0].free_text}
            </div>

            <div className={companyStyles.descrption}>
              {blogBanner[0].content[0].sub_heading}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "2% 6% 0" }}>
        <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
      </div>
      <div style={{display:"flex",flexWrap:"wrap",padding:"0 7%"}}>
      {blogs.map((val: any) => (
        <div className={blogStyle.allBlogs}>
          <BlogSection {...val} />
        </div>
      ))}
      </div>
      
      <Footer {...footer} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ res }: any) => {
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
