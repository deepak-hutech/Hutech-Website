import "bootstrap/dist/css/bootstrap.min.css";
import "nextjs-breadcrumbs/dist/index.css";
import { useEffect } from "react";
import "../styles/globals.css";
import strings from "./../public/strings.json";

const { baseUrl } = strings;
function MyApp(props: any) {
  const { Component, pageProps } = props;
  useEffect(()=>{
    const _global:any = window;
    console.log("###GTMID",process.env);
    
    _global['gtm_id'] = process.env.GTM_ID || "GTM-NQK9XJ2";
		const scriptGtm = document.createElement('script');
		scriptGtm.type = 'text/javascript';
		scriptGtm.src = '/static/googletagmanager.js';
		scriptGtm.defer = true;
		document.head.appendChild(scriptGtm);
  })
  return <>
  <noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
    title="gtm"
  />
</noscript>
<Component {...pageProps} />
</>
}

export default MyApp;
