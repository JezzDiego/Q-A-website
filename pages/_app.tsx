import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Q-A-Website</title>
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
