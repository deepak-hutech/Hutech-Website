import { useEffect, useRef } from "react";
import { baseUrl } from "../../public/strings.json";
import type { GetStaticProps, NextPage } from "next";
import BlogSection from "../../components/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogStyle from "../../styles/blog.module.css";
import companyStyles from "../../styles/Company.module.css";
import Image, { ImageLoader } from "next/image";
import Breadcrumbs from "nextjs-breadcrumbs";
import { Pagination } from "react-bootstrap";
import marked from "marked";
import careerstyles from "../../styles/Careers.module.css";
const myLoaderbanner: ImageLoader = (url: any) => {
  return url;
};
const Article: NextPage<{
  header: any;
  footer: any;
  blogs: any;
  blog: any;
  blogBanner: any;
  article: any;
  categories: any;
}> = (props) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { header, footer, blogs, blogBanner, article, categories, blog } =
    props;

  // const Article = ({ article }:any) => {
  console.log(props);
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
            <div className={blogStyle.blogfree_text}>{article.blog_title}</div>

            <div className={companyStyles.descrption}>Hutech, Technology</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "2% 6% 0" }}>
        <Breadcrumbs useDefaultStyle transformLabel={(title) => title} />
      </div>
      <div className={blogStyle.blog_details_container}>
        <div
          className={blogStyle.blog_details_left}
         
        >
          <div  dangerouslySetInnerHTML={{ __html: marked(article.blog_text) }}>

          </div>
          <div className={blogStyle.authercontainer}>
          <Image
          loader={() =>
            myLoaderbanner(
              (baseUrl + blogBanner[0].content[0].home_banner[0].url) as any
            )
          }
          src={baseUrl + blogBanner[0].content[0].home_banner[0].url}
          placeholder="blur"
          blurDataURL={baseUrl + blogBanner[0].content[0].home_banner[0].url}
          height={60}
          width={60}
          className={blogStyle.autherimg}
        />
            <div className={blogStyle.authername}>
              <h4>Samir kumar</h4>
              <p>Author</p>
            </div>
            <div className={blogStyle.postdate}><p>Posted on </p>
            <p>December 12, 2021</p>
            </div>

          </div>

        </div>
        <div className={blogStyle.blog_details_right}>
          <h4>Categories</h4>
          <div>
            {categories.map((categories: any, index: number) => (
              <div className={blogStyle.blog_cat}>
                <p>{categories.categoriestitle}</p>
              </div>
            ))}
          </div>

          <h4>Recent Articles</h4>
          {blogs.map(
            (blogs: any, index: number) =>
              index < 5 && (
                <div className={blogStyle.resent_blog}>
                  <a className={blogStyle.blog_cata}>{blogs.blog_title}</a>
                </div>
              )
          )}
        </div>
      </div>
      <div className={blogStyle.relatedPost}> 
        <h3>Related Posts</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {blogs.map((val: any, index: number) => index < 3 &&(
          <div className={blogStyle.allBlogs}>
            <BlogSection {...val} />
          </div>
        ))}
      </div>
      </div>

      <div className={careerstyles.section5}>
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
export async function getStaticPaths() {
  const blogResult = await fetch(`${baseUrl}/blog-pages`);

  const blogs: any = await blogResult.json();
  //  console.log(blogs, "blogs")

  return {
    paths: blogs.map((blog: any) => ({
      params: {
        uid: blog.uid,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  console.log(params, "parama");
  // const allBlogResult = await fetch(`${baseUrl}/blog-pages`);
  // const allBlogs: any = await allBlogResult.json();
  const headerResult = await fetch(`${baseUrl}/header`);
  const categoriesResult = await fetch(`${baseUrl}/categories`);
  const blogResult = await fetch(`${baseUrl}/blog-pages?uid=${params.uid}`);
  const blogtitleResult = await fetch(`${baseUrl}/blog-pages`);
  const blogBannerRes = await fetch(`${baseUrl}/pages/?uid=blog-1`);
  const footerResult = await fetch(`${baseUrl}/footer`);
  const blog: any = await blogResult.json();
  const allBlog: any = await blogtitleResult.json();
  const header: any = await headerResult.json();
  const categories: any = await categoriesResult.json();
  const blogBanner: any = await blogBannerRes.json();

  const footer: any = await footerResult.json();

  // const articles = await fetchAPI(
  //   `/articles?link=${params.link}`
  // );
  return {
    props: {
      article: blog[0],
      header,
      footer,
      blogBanner,
      categories,
      blogs: allBlog,
    },
    revalidate: 1,
  };
}
export default Article;
