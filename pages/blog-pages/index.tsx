import { useEffect, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import BlogSection from "../../components/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogStyle from "../../styles/blog.module.css";


import { baseUrl } from "../../public/strings.json";

const AllBlogs: NextPage<{ header: any; footer: any, blogs: any }> = (
  props
) => {
  
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { header, footer, blogs } = props;
  
  return (
    <div ref={scrollRef}>
          {blogs.map((val: any) => (
          <div className={blogStyle.allBlogs}>
              <BlogSection {...val} />
          </div>
            ))}
         <Footer {...footer}/>
    </div>
  );
};



export const getStaticProps: GetStaticProps = async ({ res }: any) => {
  try {
    const headerResult = await fetch(`${baseUrl}/header`);
    const blogResult = await fetch(`${baseUrl}/blog-pages`);
    const footerResult = await fetch(`${baseUrl}/footer`);
    const header: any = await headerResult.json();
    const allBlogs: any = await blogResult.json();

    const footer: any = await footerResult.json();

    return {
      props: { header, footer, blogs: allBlogs },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default AllBlogs;
