import Seo from "../components/Seo";
import * as THREE from "three";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section04 from "../components/pages/Section04";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";

import ThreeCanvas from "../components/pages/ThreeCanvas";
import { useEffect } from "react";
import eventFnc from "../components/Event";
import Footer from "../components/layout/Footer";
import MainHeader from "../components/layout/MainHeader";
import MainFooter from "../components/layout/MainFooter";

export default function Home() {
  const clock = new THREE.Clock();
  const time = clock.getElapsedTime();

  useEffect(() => {
    eventFnc();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <MainHeader />
      <div className="fixed top-0 left-0 w-screen h-screen bg-black">
        <ThreeCanvas />
      </div>
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl1 2xl:right-80 2xl:top-52 right-52 top-32"
      />
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl2 2xl:right-72 2xl:top-44 right-44 top-40"
      />
      <img src="blurCercle.png" className="blurImg2 blurCntl3" />
      <img src="blurCercle.png" className="blurImg2 blurCntl4" />
      <img src="blurCercle.png" className="blurImg2 blurCntl5" />
      <img src="blurCercle.png" className="blurImg2 blurCntl6" />
      <img src="blurCercle.png" className="blurImg1 blurCntl7" />
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl8 2xl:right-2/3 right-1/2 top-96"
      />
      <img
        src="oneHand.png"
        className="onehand 2xl:top-24 top-20 2xl:-right-10 -right-28 2xl:w-1/4 w-1/3"
      />
      <img
        src="moveCercle.svg"
        className="moveCercle 2xl:top-0 -top-20 2xl:right-96 right-60"
      />
      <div className="relative top-0 left-0 ">
        <img
          src="2.svg"
          className="Bwireframe sec1Img 2xl:right-80 2xl:top-52 right-52 top-32"
        />
        <img src="6.svg" className="Swireframe sec1Img" />
        <img src="plane.svg" className="planeImg plane1 sec1Img" />

        <Section01 />
        <Section02 />
        <div className="bg-secondary-color overflow-hidden">
          <Section03 />
          <Section04 />
          <Section05 />
        </div>
        <SectionLast />
      </div>
      <MainFooter />
    </div>
  );
}
