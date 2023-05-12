import { useState, useEffect } from "react";

export default function MainFooter() {
  const [page, setPage] = useState(0);
  function onScroll() {
    setPage(Math.round(window.scrollY / window.innerHeight));
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className=" body-font fixed bottom-0 w-screen">
      <div className="lg:pb-10 pb-3 box-border flex justify-between items-end w-full ">
        <div className="flex flex-col text-white">
          <div className="lg:text-base text-xs flex flex-col text-left justify-start">
            <h1 className="2xl:pl-8 pl-4">01</h1>
            <div
              className={
                "h-0.5 lg:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 0 ? " lg:w-14 w-9" : " w-0"}`
              }
            />
            <h1 className="2xl:pl-8 pl-4">02</h1>
            <div
              className={
                "h-0.5 lg:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 1 ? " lg:w-14 w-9" : " w-0"}`
              }
            />
            <h1 className="2xl:pl-8 pl-4">03</h1>
            <div
              className={
                "h-0.5 lg:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 2 ? " lg:w-14 w-9" : " w-0"}`
              }
            />
            <h1 className="2xl:pl-8 pl-4">04</h1>
            <div
              className={
                "h-0.5 lg:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 3 ? " lg:w-14 w-9" : " w-0"}`
              }
            />
            <h1 className="2xl:pl-8 pl-4">05</h1>
            <div
              className={
                "h-0.5 lg:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 4 ? " lg:w-14 w-9" : " w-0"}`
              }
            />
            <h1 className="2xl:pl-8 pl-4">06</h1>
            <div
              className={
                "h-0.5 lg:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 5 ? " lg:w-14 w-9" : " w-0"}`
              }
            />
          </div>
          <div className="text-white lg:text-xl text-xs lg:pl-8 pl-5 justify-end">
            2021 A2I.inc All Rights Reserved
          </div>
        </div>
        <div className="text-white lg:pb-16 lg:pr-0 pr-5 ">
          <div className="lg:rotate-270 lg:text-xl text-xs">
            Powerd by a2i.inc
          </div>
        </div>
      </div>
    </div>
  );
}
