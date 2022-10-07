import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import Lottie from "react-lottie-player";
import AOS from "aos";
import Seo from "../components/Seo";

import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";

import lottieJson from "/public/masterSection.json";
import smallCercel from "/public/smallCercel.json";
import Lottie01 from "/public/Lottie01.json";
import lastSection from "/public/lastSection.json";
import Loading from "../components/Loading";

export default function Home() {
  const lottieRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isTop, setisTop] = useState(false);
  const [isLast, setisLast] = useState(false);

  function onScroll(pageNow) {
    window.scrollTo({
      top: (pageNow - 1) * window.innerHeight,
      behavior: "smooth",
    });
  }

  const onMove = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      if (page == 8) return;
      setPage(page + 1);
      onScroll(page + 1);
    } else if (e.deltaY < 0) {
      if (page == 1) return;
      setPage(page - 1);
      onScroll(page - 1);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    AOS.init({
      anchorPlacement: "bottom-bottom",
    });
  });

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
    // }, 500);
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
      if (window.scrollY >= window.innerHeight * 6 - 10) {
        setisLast(true);
      } else setisLast(false);
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onLottie = () => {
      console.log("Scrolling");
      animatebodymovin(window.innerHeight * 6);
    };

    document.addEventListener("scroll", onLottie);
    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onLottie);
    };
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {loading ? (
        <Loading />
      ) : (
        <div className="overflow-x-hidden snap-y snap-mandatory overflow-y-scroll bg-black">
          <div className="fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 w-screen">
            <Lottie
              loop
              animationData={Lottie01}
              play
              className={
                "w-screen fixed top-0 hidden" +
                `${isTop ? " xl:block z-10" : ""}`
              }
            />

            <Lottie
              loop
              animationData={lastSection}
              play
              className={
                "w-screen fixed top-0 hidden" +
                `${isLast ? " xl:block z-10" : ""}`
              }
            />
            <Lottie
              loop
              animationData={smallCercel}
              play
              className="xl:hidden block z-0"
            />
            <div
              ref={lottieRef}
              className="min-w-full xl:block hidden fixed top-0"
            />
          </div>
          <Section01 />
          <Section02 />
          <Section03 />
          <Section05 />
          <div className="h-screen  xl:block hidden" />
          <div className="h-screen  xl:block hidden" />
          <div className="h-screen  xl:block hidden" />
          <div className="h-screen  xl:block hidden" />
          <SectionLast />
        </div>
      )}
    </div>
  );
}
