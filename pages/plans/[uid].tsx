import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import ErrorPage from "next/error";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import { baseUrl } from "../../public/strings.json";
import UnderConstruction from "../underConstruction";
const PlanPage: NextPage<any> = (props) => {
  const router = useRouter();
  const { uid } = router.query;
  const _uid: any = uid?.toString().split("_").join(" ");
  if (
    !props.header ||
    !props.pages ||
    !props.footer ||
    
    props.pages.length === 0
  ) {
    return (
      <>
        <Head>
          <title>{_uid}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <UnderConstruction />
      </>
    );
  }
  const {
    content,
    title,
    descrption,
    favicon: { url: favicon },
  } = props.pages[0];
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descrption} />
        <link rel="icon" href={`${baseUrl}${favicon}`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header {...props.header} />
      {content.map((section: any) => (
        <Section {...section} />
      ))}
      <Footer {...props.footer} />
    </div>
  );
};
export async function getStaticProps({ params }: any) {
  const pageResult = await fetch(`${baseUrl}/pages`);
  const pages = await pageResult.json();
  const headerResult = await fetch(`${baseUrl}/header`);
  const footerResult = await fetch(`${baseUrl}/footer`);
  const header: any = await headerResult.json();
  const footer: any = await footerResult.json();
debugger;
  return {
    props: {
      pages,
      header,
      footer,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 86400, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const pageResult = await fetch(`${baseUrl}/pages`);
  const pages = await pageResult.json();

  // Get the paths we want to pre-render based on posts
  const paths = pages.map((pages: any) => ({
    params: { name: pages.uid },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}
export default PlanPage;
