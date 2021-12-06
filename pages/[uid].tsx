import {useEffect, useRef} from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "next/error";
import Section from "../components/Section";

import { baseUrl } from "../public/strings.json";

const DynamicPage: NextPage<{ header: any; pages: any; footer: any }> = (
  props
) => {
  console.log("@@@@@@@@", props);

  if (!props.pages) {
    return <ErrorPage statusCode={404} />;
  }

  const scrollRef = useRef()  as React.MutableRefObject<HTMLInputElement>;

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
  console.log(header, "lll");
  const { title, content, Logo, descrption } = props.pages;
  console.log("lllllll", content);
  console.log("@@@@@@@@", props.pages);
  return (
    <div ref={scrollRef}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descrption} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href={`${baseUrl}${favicon}`} /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css"
        />
      </Head>
      <Header {...header} />
      {/* {content.map((section: any) => (
        <Section {...section} />
      ))} */}
      {/* <div data-scroll data-scroll-call="{y,o,l,o}">Trigger</div>
      <h1 data-scroll data-scroll-speed="1" >TEST</h1> */}
      <Footer {...footer} />
    </div>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  
  const pageResult = await fetch(`${baseUrl}/pages`);
  const pages = await pageResult.json();
  console.log("pages", pages);

  // Get the paths we want to pre-render based on posts
  const paths = pages.map((page: any) => ({
    params: { uid: page.uid },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ res }: any) => {
  try {
    const headerResult = await fetch(`${baseUrl}/header`);
    const pageResult = await fetch(`${baseUrl}/pages?Title=company`);

    const footerResult = await fetch(`${baseUrl}/footer`);
    const header: any = await headerResult.json();
    const pages: any = await pageResult.json();

    const footer: any = await footerResult.json();
    console.log("plans/uid", res);
    

    return {
      props: { pages: pages, header, footer },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default DynamicPage;
