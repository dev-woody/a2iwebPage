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
    <div className=" body-font fixed top-0 w-screen h-screen">
      <div className="2xl:p-10 p-5 pt-0 mx-auto mb-20 box-border flex justify-end items-end sm:flex-row flex-col w-screen h-screen">
        <div className="flex flex-col text-white justify-start items-start">
          <div className="fixed bottom-32 2xl:text-2xl text-xl flex flex-col text-right justify-end items-end 2xl:w-20 w-10">
            <h1 className="pr-2">01</h1>
            <div
              className={
                "h-0.5 2xl:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 0 ? " w-40" : " w-0"}`
              }
            />
            <h1 className="pr-2">02</h1>
            <div
              className={
                "h-0.5 2xl:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 1 ? " w-40" : " w-0"}`
              }
            />
            <h1 className="pr-2">03</h1>
            <div
              className={
                "h-0.5 2xl:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 2 ? " w-40" : " w-0"}`
              }
            />
            <h1 className="pr-2">04</h1>
            <div
              className={
                "h-0.5 2xl:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 3 ? " w-40" : " w-0"}`
              }
            />
            <h1 className="pr-2">05</h1>
            <div
              className={
                "h-0.5 2xl:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 4 ? " w-40" : " w-0"}`
              }
            />
            <h1 className="pr-2">06</h1>
            <div
              className={
                "h-0.5 2xl:mb-10 mb-5 bg-white  ease-in-out" +
                `${page === 5 ? " w-40" : " w-0"}`
              }
            />
          </div>
          <p className="text-white 2xl:text-xl text-md">
            2021 A2I.inc All Rights Reserved
          </p>
        </div>
        <div className="inline-flex sm:ml-auto  justify-center sm:justify-start text-white">
          <span className="pl-20 pt-20 -rotate-90 2xl:text-xl text-md">
            Powerd by a2i.inc
          </span>
        </div>
      </div>
    </div>
  );
}
