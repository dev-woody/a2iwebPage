import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <Layout>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@1/dist/lottie-player.js"></script>
      </Head>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
