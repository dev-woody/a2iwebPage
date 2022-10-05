import React, { useEffect, useState, useRef, useMemo } from "react";
import lottie from "lottie-web";
import Lottie from "react-lottie-player";
import Seo from "../components/Seo";

import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";

import lottieJson from "/public/masterSection.json";
import Lottie01 from "/public/Lottie01.json";
import Indicator from "../components/layout/Indicator";

export default function Home() {
  const lottieRef = useRef(null);
  // const [page, setPage] = useState(1);

  // function onScroll() {
  //   window.scrollTo({
  //     top: (page - 1) * window.innerHeight,
  //     behavior: "smooth",
  //   });
  // }

  // const onMove = (e) => {
  //   e.preventDefault();
  //   onScroll();
  //   if (e.deltaY > 0) {
  //     if (page == 6) return;
  //     setPage(page + 1);
  //   } else if (e.deltaY < 0) {
  //     if (page == 1) return;
  //     setPage(page - 1);
  //   }
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     window.addEventListener("wheel", onMove, {
  //       passive: false,
  //     });
  //     console.log(page);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //     window.removeEventListener("wheel", onMove, {
  //       passive: false,
  //     });
  //   };
  // }, [onMove]);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef?.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieJson,
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onLottie = () => {
      console.log("Scrolling");
      animatebodymovin(window.innerHeight * 5);
    };

    document.addEventListener("scroll", onLottie);
    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onLottie);
    };
  }, []);

  return (
    <>
      <Seo title="Home" />
      <div className="bg-black">
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden object-cover object-center">
          {/* <Lottie
            loop
            animationData={Lottie01}
            play
            className={"w-screen" + `${page === 1 ? " block" : " hidden"}`}
          /> */}
          <div ref={lottieRef} className="min-w-full min-h-full" />
        </div>
        <div className="z-10 relative">
          <Section01 className="snap-center" />
          <Section02 className="snap-center" />
          <Section03 className="snap-center" />
          <Section05 className="snap-center" />
          <SectionLast className="snap-center" />
          {/* <Indicator page={page} /> */}
        </div>
      </div>
    </>
  );
}
