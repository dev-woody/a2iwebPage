import Link from "next/link";
import Logo from "/public/LogoWhite.svg";

export default function MainHeader() {
  return (
    <div className="fixed top-0 left-0 w-screen z-50">
      <div className="mx-auto flex flex-wrap lg:p-10 p-2 box-border lg:justify-normal justify-between items-start w-screen h-1/2">
        <div className="flex lg:w-2/5 flex-wrap items-center md:ml-auto">
          <Link href="/">
            <a className="text-white flex title-font font-medium items-center mb-4 md:mb-0">
              <Logo className="ml-3 mr-3 h-8" />
              Artificial to Intelligence
            </a>
          </Link>
        </div>
        <a className="lg:flex hidden order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 lg:text-xl text-xs text-white">
            A (artificial) to I (intelligence)
          </span>
        </a>
        <div className="lg:w-2/5 flex lg:justify-end lg:mt-40 mt-0 ml-10 lg:pr-10 lg:ml-0 pr-2">
          <div className="flex flex-col text-white lg:text-3xl text-sm text-right font-serif w-full">
            <Link href="/">
              <a className=" hover:text-primary-color inline-block w-full lg:mb-10 mb-5 duration-700">
                Main
              </a>
            </Link>
            <Link href="/about">
              <a className=" hover:text-primary-color lg:mb-10 mb-5 duration-700">
                About us
              </a>
            </Link>
            <Link href="/brand">
              <a className=" hover:text-primary-color lg:mb-10 mb-5 duration-700">
                Brand
              </a>
            </Link>
            <Link href="/contact">
              <a className=" hover:text-primary-color duration-700">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
