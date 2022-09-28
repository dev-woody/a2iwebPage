import Link from "next/link";
import { useCallback, useEffect } from "react";
import Logo from "/public/Logo.svg";

export default function Header() {
  // const onScroll = useCallback((e) => {
  //   console.log(e);
  // });
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // });
  return (
    <header className="text-white body-font w-full drop-shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center hover:text-primary-color mb-4 md:mb-0">
            <Logo className="ml-3 mr-3 h-8" />
          </a>
        </Link>
        <nav className="md:ml-auto md:w-1/3 flex items-center text-base justify-evenly ease-in-out">
          <Link href="/about">
            <a className=" hover:text-primary-color ">About us</a>
          </Link>
          <Link href="/brand">
            <a className=" hover:text-primary-color ">Brand</a>
          </Link>
          <Link href="/contact">
            <a className=" hover:text-primary-color ">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
