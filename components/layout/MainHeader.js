import Link from "next/link";
import Logo from "/public/LogoWhite.svg";

export default function MainHeader() {
  return (
    <div className="fixed flex flex-col flex-wrap justify-between top-0 left-0 w-screen h-screen z-20">
      <div className="mx-auto flex flex-wrap p-10 box-border flex-col md:flex-row items-start w-screen h-1/2">
        <div className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <a className="text-white flex title-font font-medium items-center mb-4 md:mb-0">
              <Logo className="ml-3 mr-3 h-8" />
              Artificial to Intelligence
            </a>
          </Link>
        </div>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 2xl:text-xl text-sm text-white">
            A (artificial) to I (intelligence)
          </span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end 2xl:mt-40 mt-10 ml-5 pr-10 lg:ml-0">
          <div className="flex flex-col text-white 2xl:text-4xl text-xl text-right font-serif">
            <Link href="/">
              <a className=" hover:text-primary-color mb-10 duration-700">
                Main
              </a>
            </Link>
            <Link href="/about">
              <a className=" hover:text-primary-color mb-10 duration-700">
                About us
              </a>
            </Link>
            <Link href="/brand">
              <a className=" hover:text-primary-color mb-10 duration-700">
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
