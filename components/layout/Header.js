import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "/public/Logo.svg";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const onScroll = (e) => {
    // e.preventDefault();
    if (e.deltaY > 0) {
      setIsScroll(true);
      console.log("스크롤");
    } else if (e.deltaY < 0) {
      setIsScroll(false);
      console.log("스크롤");
    }
  };
  useEffect(() => {
    window.addEventListener("wheel", onScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", onScroll, { passive: false });
    };
  }, [onScroll]);
  return (
    <header
      className={
        "text-white body-font w-screen drop-shadow-md fixed z-50 transition-all" +
        `${isScroll ? "  -top-40" : " top-0 bg-white text-black"}`
      }
    >
      <div className="container mx-auto flex sm:flex-wrap p-5 flex-col sm:flex-row items-center">
        <Link href="/">
          <a
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            style={{ color: "#912845" }}
          >
            <Logo className="ml-3 mr-3 h-8" />
            Artificial to Intelligence
          </a>
        </Link>
        <nav className="md:ml-auto md:w-1/4 flex items-center text-base sm:justify-between ease-in-out">
          <Link href="/about">
            <a className=" hover:text-primary-color mr-5">About us</a>
          </Link>
          <Link href="/brand">
            <a className=" hover:text-primary-color mr-5">Brand</a>
          </Link>
          <Link href="/contact">
            <a className=" hover:text-primary-color ">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
