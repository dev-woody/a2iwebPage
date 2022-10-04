import Link from "next/link";
import Logo from "/public/LogoGray.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font bottom-0 relative">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo className="ml-3 w-5" />
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2021 A2I Inc. —
          <a
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @A2I Inc.
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <Link href="https://www.youtube.com/channel/UCs5cfnVlt4VVedFaVkBtlGQ">
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.07,3.6H4.25C1.23,3.6,0,6.06,0,9.09v5.82c0,3,1.36,5.49,4.38,5.49H19.94c3,0,4.06-2.46,4.06-5.49V9.09C24,6.06,23.09,3.6,20.07,3.6ZM9.8,15.29V8.71L16.09,12Z" />
              </svg>
            </a>
          </Link>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
