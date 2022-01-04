// import marked from "marked";
// import type { GetStaticProps, NextPage } from "next";
// import Image, { ImageLoader } from "next/image";
// import Breadcrumbs from "nextjs-breadcrumbs";
// import { useRef, useState } from "react";
// import ReactPaginate from "react-paginate";
// import BlogSection from "../../components/Blog";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import strings from "../../public/strings.json";
// import Section from "../../components/Section";
// import careerstyles from "../../styles/Careers.module.css";
// import "./bootstrap.min.css";
// import companyStyles from "../../styles/Company.module.css";





// const { baseUrl } = strings;
// const myLoaderbanner: ImageLoader = (url: any) => {
//   return url;
// };
// const Services: NextPage<{
//   header: any;
//   footer: any;
//   services: any;
//   pages:any;
// }> = (props) => {
  
//   const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
//   const { header, footer, services } = props;
  
//   const {  content} = props?.pages[0];
  
  //When new page selected in paggination, we take current path and query parrams.
  // Then add or modify page parram and then navigate to the new route.
//   return (
//     <div ref={scrollRef}>
//       <Header {...header} />
//       {content.map((section: any) => (
//         <Section {...section} />
//       ))}
//       <Footer {...footer} />
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async ({ query }: any) => {
//   try {
//     const headerResult = await fetch(`${baseUrl}/header`);
//     const servicesResult = await fetch(`${baseUrl}/pages?uid=services`);
    
//     const footerResult = await fetch(`${baseUrl}/footer`);
//     const header: any = await headerResult.json();
//     const services: any = await servicesResult.json();
    

//     const footer: any = await footerResult.json();

//     return {
//       props: { header, footer, pages: services },
//     };
//   } catch (e) {
//     return {
//       props: {},
//     };
//   }
// };

// export default Services;
