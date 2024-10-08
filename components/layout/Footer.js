import Link from "next/link";
import Logo from "/public/LogoGray.svg";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo className="ml-3 w-5" />
            <span className="ml-3 text-xl">A2I.Inc</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Artifical to Intelligence
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-800">회사설명</a>
            </Link>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Link href="/brand">
              <a className="text-gray-500 hover:text-gray-800">브랜드</a>
            </Link>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Link href="/contact">
              <a className="text-gray-500 hover:text-gray-800">연락하기</a>
            </Link>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Link href="/policy/collect">
              <a className="text-gray-500 hover:text-gray-800">
                개인정보처리방침
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
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
      </div>
    </footer>
    // <footer className="bg-gray-100 text-gray-600 body-font relative bottom-0">
    //   <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    //     <Link href="/">
    //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //         <Logo className="ml-3 w-5" />
    //       </a>
    //     </Link>
    //     <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
    //       © 2021 A2I Inc. —
    //       <a
    //         rel="noopener noreferrer"
    //         className="text-gray-600 ml-1"
    //         target="_blank"
    //       >
    //         @A2I Inc.
    //       </a>
    //     </p>
    //     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    //       <a className="text-gray-500">
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           className="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //         </svg>
    //       </a>
    //       <Link href="https://www.youtube.com/channel/UCs5cfnVlt4VVedFaVkBtlGQ">
    //         <a className="ml-3 text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M20.07,3.6H4.25C1.23,3.6,0,6.06,0,9.09v5.82c0,3,1.36,5.49,4.38,5.49H19.94c3,0,4.06-2.46,4.06-5.49V9.09C24,6.06,23.09,3.6,20.07,3.6ZM9.8,15.29V8.71L16.09,12Z" />
    //           </svg>
    //         </a>
    //       </Link>
    //       <a className="ml-3 text-gray-500">
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           className="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //         </svg>
    //       </a>
    //     </span>
    //   </div>
    // </footer>
  );
}
