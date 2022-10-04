import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
