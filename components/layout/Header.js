import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="text-gray-600 body-font sticky md:sticky top-0 w-full bg-white z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">A2I Korea</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <a className="mr-5 hover:text-gray-900">About us</a>
          </Link>
          <Link href="/brand">
            <a className="mr-5 hover:text-gray-900">Brand</a>
          </Link>
          <Link href="/connect">
            <a className="mr-5 hover:text-gray-900">Connect</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
