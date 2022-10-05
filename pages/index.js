import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import Lottie from "react-lottie-player";
import Seo from "../components/Seo";

import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";

import lottieJson from "/public/masterSection.json";
import smallCercel from "/public/smallCercel.json";
import Lottie01 from "/public/Lottie01.json";
import Indicator from "../components/layout/Indicator";

export default function Home() {
  const lottieRef = useRef(null);
  const [page, setPage] = useState(1);
  const [isTop, setisTop] = useState(false);

  function onScroll(pageNow) {
    window.scrollTo({
      top: (pageNow - 1) * window.innerHeight,
      behavior: "smooth",
    });
  }

  const onMove = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      if (page == 6) return;
      setPage(page + 1);
      onScroll(page + 1);
    } else if (e.deltaY < 0) {
      if (page == 1) return;
      onScroll(page - 1);
      setPage(page - 1);
    }
  };

  useEffect(() => {
    setisTop(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    // const timer = setInterval(() => {
    window.addEventListener("wheel", onMove, {
      passive: false,
    });
    // }, 1000);
    return () => {
      // clearInterval(timer);
      window.removeEventListener("wheel", onMove, {
        passive: false,
      });
    };
  }, [onMove]);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef?.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieJson,
    });

    function animatebodymovin(duration) {
      if (window.scrollY == 0) {
        setisTop(true);
      } else setisTop(false);
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
    <div className="overflow-x-hidden">
      <Seo title="Home" />
      <div className="bg-black">
        <div className="fixed h-screen flex justify-center items-center top-0 left-0 w-screen">
          <Lottie
            loop
            animationData={Lottie01}
            play
            className={
              "w-screen fixed top-0 hidden" + `${isTop ? " lg:block z-10" : ""}`
            }
          />
          <Lottie
            loop
            animationData={smallCercel}
            play
            className="lg:hidden block"
          />
          <div
            ref={lottieRef}
            className="min-w-screen min-h-screen lg:block hidden fixed top-0"
          />
        </div>
        <div className="z-10 relative">
          <Section01 />
          <Section02 />
          <Section03 />
          <Section05 />
          <SectionLast />
          <Indicator page={page} />
        </div>
      </div>
    </div>
  );
}
