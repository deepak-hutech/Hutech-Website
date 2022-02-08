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
import Section from "../../components/Section";
import careerstyles from "../../styles/Careers.module.css";
// import "./bootstrap.min.css";
import companyStyles from "../../styles/Company.module.css";





const { baseUrl } = strings;
const myLoaderbanner: ImageLoader = (url: any) => {
  return url;
};
const Careers: NextPage<{
  header: any;
  footer: any;
  services: any;
  pages:any;
}> = (props) => {
  
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { header, footer, pages } = props;
  
  const {  content} = pages[0];
  
  //When new page selected in paggination, we take current path and query parrams.
  // Then add or modify page parram and then navigate to the new route.
  return (
    <div ref={scrollRef}>
      <Header {...header} />
      {content.map((section: any) => (
        <Section {...section} />
      ))}
      <Footer {...footer} />
    </div>
  );
};
export async function getStaticPaths() {
  const pages = await fetch(`${baseUrl}/pages`);

  const careers: any = await pages.json();

  return {
    paths: careers.map((career: any) => ({
      params: {
        uid: career.uid,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ query,params }: any) => {
  try {
    const headerResult = await fetch(`${baseUrl}/header`);
    const careersResult = await fetch(`${baseUrl}/pages?uid=${params.uid}`);
    
    const footerResult = await fetch(`${baseUrl}/footer`);
    const header: any = await headerResult.json();
    const careers: any = await careersResult.json();
    

    const footer: any = await footerResult.json();

    return {
      props: { header, footer, pages: careers },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Careers;
