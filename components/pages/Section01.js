import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

export default function Section01({ time }) {
  return (
    <section
      className="section01 max-h-screen h-screen container mx-auto flex 2xl:px-5 px-20 py-24 md:flex-row flex-col items-center justify-center"
      id="cercle"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font 2xl:text-8xl sm:text-6xl text-3xl mb-8 font-bold text-none tracking-widest text-secondary-color">
          기술,
        </h1>
        <h1 className="title-font 2xl:text-8xl sm:text-6xl text-3xl mb-8 font-bold text-secondary-color">
          혁신으로
        </h1>
        <h1 className="title-font 2xl:text-8xl sm:text-6xl text-3xl mb-8 font-bold text-secondary-color">
          서비스가 되다.
        </h1>
        <p className="mb-8 sm:text-2xl text-1xl leading-relaxed text-gray-600">
          SERVICE BECOMES A THROUGH TECHNOLOGY AND INNOVATION.
        </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
    </section>
  );
}
