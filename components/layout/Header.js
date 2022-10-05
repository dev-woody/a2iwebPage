import Link from "next/link";
import Logo from "/public/Logo.svg";

export default function Header() {
  return (
    <header className="text-white body-font w-screen drop-shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex sm:flex-wrap p-5 flex-col sm:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center hover:text-primary-color mb-4 md:mb-0">
            <Logo className="ml-3 mr-3 h-8" />
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
