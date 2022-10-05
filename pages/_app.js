import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <Layout>
      <Script
        type="text/javascript"
        src="https://unpkg.com/lottie-interactive@latest/dist/lottie-interactive.js"
      ></Script>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
