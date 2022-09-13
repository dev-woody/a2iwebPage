import Link from "next/link";
import Logo from "/public/Logo.svg";

export default function Header() {
  return (
    <header className="text-gray-600 body-font sticky md:sticky top-0 w-full bg-white z-50 drop-shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-primary-color mb-4 md:mb-0">
            <Logo className="ml-3 mr-3 h-8" />
            A2I Inc.
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <a className="mr-5 hover:text-primary-color duration-500">
              About us
            </a>
          </Link>
          <Link href="/brand">
            <a className="mr-5 hover:text-primary-color duration-500">Brand</a>
          </Link>
          <Link href="/connect">
            <a className="mr-5 hover:text-primary-color duration-500">
              Connect
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
