import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { baseUrl } from "./../public/strings.json";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp(props: any) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />
}


export default MyApp
