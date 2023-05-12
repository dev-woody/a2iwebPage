import Seo from "../components/Seo";
import * as THREE from "three";

import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section04 from "../components/pages/Section04";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";

import ThreeCanvas from "../components/pages/ThreeCanvas";
import { useEffect } from "react";
import eventFnc from "../components/Event";
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
      <div className="fixed top-0 left-0 w-screen h-screen bg-black z-15">
        <ThreeCanvas />
      </div>
      <img
        src="blurCercle.png"
        className="blurImg2 xl:-top-20 xl:left-96 top-20 right-10"
      />
      <img
        src="blurCercle.png"
        className="blurImg2 xl:top-60 xl:right-96 top-60 left-10"
      />
      <img
        src="blurCercle.png"
        className="blurImg2 blurCntl5 lg:block hidden"
      />
      <img
        src="blurCercle.png"
        className="blurImg2 blurCntl6 lg:block hidden"
      />
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl7 lg:block hidden lg:w-1/12 lg:top-20 lg:left-1/2"
      />
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl8 xl:right-2/3 right-1/2 top-96 lg:block hidden"
      />
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl1 xl:right-80 xl:top-52 md:right-10 md:top-10 right-1/4 top-1/2 xl:w-1/4 w-1/2 "
      />
      <img
        src="blurCercle.png"
        className="blurImg1 blurCntl2 xl:right-72 xl:top-44 lg:right-10 md:right-10 md:top-10 right-1/4 top-1/2 xl:w-1/4 w-1/2"
      />
      <img
        src="oneHand.png"
        className="onehand xl:top-24 lg:top-10 top-1/3 xl:-right-10 lg:-right-28 -right-1/3 xl:w-1/4 w-1/3"
      />
      <img
        src="moveCercle.svg"
        className="moveCercle xl:top-0 lg:-top-20 top-1/3 xl:right-96 lg:right-60 right-1/3 xl:w-1/5 w-1/3"
      />
      <div className="relative">
        <img
          src="2.svg"
          className="Bwireframe sec1Img xl:right-80 xl:top-52 xl:w-1/4 lg:right-10 lg:top-10 lg:w-1/3 right-1/4 top-1/2 w-1/2 z-10"
        />
        <img
          src="6.svg"
          className="Swireframe sec1Img lg:block hidden lg:w-1/12 lg:top-20 lg:left-1/2 z-0"
        />
        <img src="plane.svg" className="planeImg plane1 sec1Img bottom-20" />

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
