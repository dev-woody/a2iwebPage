import Image from "next/image";
import sofa from "/public/image/sofaImg.png";
import { useRef, useEffect, useState } from "react";

export default function Section04() {
  const [handleoColor, setHandleColor] = useState("0deg");

  const onHandleColor = (color) => {
    setHandleColor(color);
  };
  return (
    <section
      className="min-h-screen h-screen body-font justify-center"
      data-aos="fade-up"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center text-center sticky top-0 mb-40">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 text-left text-white">
          <h1 className="mb-8 leading-relaxed mt-10 title-font sm:text-4xl text-3xl font-medium">
            인테리어 중개플랫폼,
            <br className="hidden lg:inline-block" />
            인공지능을 품다.
          </h1>
          <div className="flex">
            <span className="mr-3">Click me!</span>
            <button
              onClick={() => onHandleColor("90deg")}
              className="border-2 border-gray-300 bg-green-200 rounded-full w-6 h-6 focus:outline-none"
            ></button>
            <button
              onClick={() => onHandleColor("180deg")}
              className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
            ></button>
            <button
              onClick={() => onHandleColor("270deg")}
              className="border-2 border-gray-300 ml-1 bg-red-400 rounded-full w-6 h-6 focus:outline-none"
            ></button>
          </div>
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:mr-10 h-full lg:pl-24 md:pl-16 flex md:items-center md:text-left items-center justify-center">
          <div className="flex justify-center h-full relative">
            <Image
              src={sofa}
              objectFit="cover"
              objectPosition="center"
              layout="intrinsic"
              className="absolute top-0 ease-in-out duration-500 saturate-200"
              style={{ filter: `hue-rotate(${handleoColor}` }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
              className="w-full h-auto absolute top-0"
              viewBox="0 0 1852 1584"
            >
              <path
                // className={`${isShow ? "animate-linear" : null}`}
                style={{
                  strokeDasharray: 5900,
                  strokeDashoffset: 5900,
                }}
                // className="animate-[linear-2s-linear-forwords]"
                d="M186.1,587.79a19.89,19.89,0,0,0-15.21,13.85,17.19,17.19,0,0,0-.43,1.9c-1,6.28,0,18.17,0,18.17L238.17,1028s10.57,61.43,25.43,82.9,8.92,33,50.86,73.32c0,0,23.12,25.1,56.15,37.65,0,0,8.26,8.58,65.06,15.19,0,0,3.31,2.31,43.93,5.61l-50.86,230.21s3.63,4,24.44,5.61,16.84-1.65,16.84-1.65l92.48-230.53,193.21,13.21-24.44,128.81s17.83,10.56,37.32,6.27l54.16-129.47,204.11,12.22L1121,1520.72s0,6.93,11.23,9.9,18.5,5,34.68,3.64c0,0,7.27,1.32,3.3-11.56s-54.82-242.42-54.82-242.42,71.34-12.22,111.3-24.77,79.27-23.45,79.27-23.45l84.22,205.76s19.81,3,25.1,2.31,9.24,1.32,13.87-3L1378,1211.25l115.59-35.67s16.52-5.62,47.89-30.39,40.63-55.48,40.63-55.48,25.76-86.53,35.33-133.43,62.76-308.15,66.39-357.36c0,0,4.62-8.92-9.58-17.5,0,0-5.28-5.95-22.79-5.95s-107.67-1.65-107.67-1.65-.66-34.68-11.23-56.81-34.67-74.31-71.67-118.9l-19.48-25.43s-7.27-16.51-36.33-16.84l-608-1.65s-34.35,5.61-49.87,19.48-42.93,41.95-46.9,47.23-43.92,50.53-58.46,104.7c0,0-6.93,20.81-7.59,33,0,0-234.5,11.23-285.69,13.21,0,0-116.92,6.93-141.69,12.22C206.79,584.06,195.26,585.9,186.1,587.79Z"
              />
              <rect strokeWidth="0" width="1852" height="1584" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
