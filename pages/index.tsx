import { useEffect, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Breadcrumbs from "nextjs-breadcrumbs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "next/error";
import Section from "../components/Section";
import BlogSection from "../components/Blog";

import { baseUrl } from "../public/strings.json";

// if (typeof window !== "undefined") {
//   const LocomotiveScroll = require("locomotive-scroll");
//   const scroll = new LocomotiveScroll.default({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//   });
// }

const Home: NextPage<{ header: any; pages: any; footer: any; blogs: any }> = (
  props
) => {
  // if (!props.pages) {
  //   return <ErrorPage statusCode={404} />;
  // }

  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return;
  //   }
  //   const LocomotiveScroll = require("locomotive-scroll");
  //   const scroll = new LocomotiveScroll.default({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => scroll.destroy();
  // }, []);

  const { header, footer } = props;
  console.log(props, "kkk");
  const { title, content, Logo, descrption } = props.pages[0];
  // const { blogcontent, blogdescrption } = props.blogs[0];
  const blogContent = props.blogs[0];
  const AllBlogContent = blogContent.content;

  return (
    <div ref={scrollRef}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descrption} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.3.11/dist/locomotive-scroll.css"
        /> */}
        {/* <link rel="icon" href={`${baseUrl}${favicon}`} /> */}
      </Head>
      <Header {...header} />
      {/* <div style={{display:"none"}}>
      <Breadcrumbs useDefaultStyle transformLabel={(title) => title } />
      <Breadcrumbs omitRootLabel />
      </div> */}
      
      {content.map((section: any) => (
        <Section {...section} />
      ))}

      {/* {AllBlogContent.map((section: any) => (
        <BlogSection {...section} />
      ))} */}

      <Footer {...footer} />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ({ res }: any) => {
  try {
    const headerResult = await fetch(`${baseUrl}/header`);
    const pageResult = await fetch(`${baseUrl}/pages`);
    const blogResult = await fetch(`${baseUrl}/blog-pages`);
    const footerResult = await fetch(`${baseUrl}/footer`);
    const header: any = await headerResult.json();
    const pages: any = await pageResult.json();
    const blogs: any = await blogResult.json();

    const footer: any = await footerResult.json();

    return {
      props: { pages: pages, header, footer, blogs: blogs },
    };
  } catch (e) {
    // res.statusCode = 404;
    return {
      props: {},
    };
  }
};
export default Home;
