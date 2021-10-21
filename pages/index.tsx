import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorPage from "next/error";
import Section from '../components/Section';

import { baseUrl } from "./../public/strings.json";

const Home: NextPage<{ header: any, pages: any, footer: any }> = (props) => {
  console.log("@@@@@@@@", props);
  
  if (!props.pages) {
    return <ErrorPage statusCode={404} />;
  }
 
  const { header, footer } = props;
  console.log(header,"lll");
  const { title, content, Logo, descrption } = props.pages[0];
  console.log("lllllll",content);
  console.log("@@@@@@@@", props.pages);
  return (
   
    <div>
      
      <Head>
        <title>{title}</title>
        <meta name="description" content={descrption} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href={`${baseUrl}${favicon}`} /> */}
      </Head>
      <Header {...header} />
      {content.map((section: any) => (
        <Section {...section} />
      ))}
     
      <Footer {...footer} />
    </div>
  )
}
export const getStaticProps: GetStaticProps = async ({ res }: any) => {
  try {
    const headerResult = await fetch(`${baseUrl}/header`);
    const pageResult = await fetch(`${baseUrl}/pages`);
    
    const footerResult = await fetch(`${baseUrl}/footer`);
    const header: any = await headerResult.json();
    const pages: any = await pageResult.json();
    
    const footer: any = await footerResult.json();
    console.log("plans/uid", res);
    debugger;
    
    return {
      props: { pages: pages,header ,footer}
      
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
}
export default Home
