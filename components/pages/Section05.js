import Lottie from "react-lottie-player";
import lottieJson from "/public/data.json";

export default function Section05() {
  return (
    <section className="section05 container max-h-screen h-screen mx-auto flex px-5 py-24 items-center justify-start flex-col">
      <div className="text-center lg:w-2/3 w-full 2xl:mb-28 mb-10">
        <h1 className="title-font sm:text-7xl text-3xl mb-4 font-bold text-white">
          Technology.
        </h1>
        <p className="mb-8 leading-relaxed text-white">[ 기술 ]</p>
      </div>
      <Lottie
        loop
        animationData={lottieJson}
        play
        className="2xl:mb-10 mb-0 object-cover object-center rounded hands"
      />
      <img src="plane.svg" alt="plane" className="planeCtrl" />
    </section>
  );
}
