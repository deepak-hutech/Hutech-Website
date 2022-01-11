import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import strings from "../public/strings.json";

const { baseUrl } = strings;

const Home: NextPage<{ header: any; pages: any; footer: any; blogs: any }> = (
  props
) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { header, footer } = props;
  const { title, content, Logo, descrption } = props?.pages[0];
  // const { blogcontent, blogdescrption } = props.blogs[0];
  const blogContent = props.blogs[0];
  const AllBlogContent = blogContent.content;

  return (
    <div ref={scrollRef}>
      <Head>
        <title>Hutech Soultion Pvt. Ltd.</title>
        <meta name="description" content="Hutech Soultion Pvt. Ltd." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.3.11/dist/locomotive-scroll.css"
        /> */}
        {/* <link rel="icon" href={`${baseUrl}${favicon}`} /> */}
        {/* <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <script src="bower_components/aos/dist/aos.js"></script>  */}
      </Head>
      <div className="root">
        <Header {...header} />

        {content.map((section: any) => (
          <Section {...section} />
        ))}

        <Footer {...footer} />
      </div>
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
