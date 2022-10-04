import React, { useEffect, useState, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";

import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section04 from "../components/pages/Section04";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";
import Seo from "../components/Seo";

import lottieJson from "/public/section01.json";
import Indicator from "../components/layout/Indicator";

export default function Home() {
  const lottieRef = React.useRef(null);
  // const [page, setPage] = useState(1);

  // function onScroll() {
  //   window.scrollTo({
  //     top: (page - 1) * window.innerHeight,
  //     behavior: "smooth",
  //   });
  //   console.log(page);
  // }

  React.useEffect(() => {
    const lottiefiles = lottieRef.current;
    lottiefiles?.addEventListener("load", () => {
      create({
        player: "#firstLottie",
        mode: "scroll",
        actions: [
          {
            visibility: [0.5, 1.0],
            type: "play",
            frames: [0, 100],
          },
        ],
      });
    });
  }, []);

  // useEffect(() => {
  //   const onMove = (e) => {
  //     e.preventDefault();
  //     onScroll();
  //     if (e.deltaY > 0) {
  //       if (page == 7) return;
  //       setPage(page + 1);
  //     } else if (e.deltaY < 0) {
  //       if (page == 1) return;
  //       setPage(page - 1);
  //     }
  //     console.log(page);
  //   };
  //   window.addEventListener("wheel", onMove, { passive: false });
  //   return () =>
  //     window.removeEventListener("wheel", onMove, { passive: false });
  // }, [onScroll]);
  return (
    <div className="bg-black">
      <div className="fixed top-0 left-0">
        <lottie-player
          ref={lottieRef}
          id="firstLottie"
          src="https://lottie.host/83e751c6-038f-452f-b7cf-aa0fb55028de/MxYc4Nc1rU.json"
          speed="1"
          loop
          autoplay
          style={{ width: "100vw" }}
        ></lottie-player>
      </div>
      <div className="z-10 relative">
        <Seo title="Home" />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <SectionLast />
        {/* <Indicator page={page} /> */}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {}
// snap-mandatory snap-y overflow-y-scroll h-screen
