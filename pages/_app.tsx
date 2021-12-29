import "bootstrap/dist/css/bootstrap.min.css";
import "nextjs-breadcrumbs/dist/index.css";
import "../styles/globals.css";
import strings from "./../public/strings.json";

const { baseUrl } = strings;
function MyApp(props: any) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default MyApp;
