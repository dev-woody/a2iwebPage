import Link from "next/link";
import INPAL from "/public/image/icon-logo.svg";

export default function Section02() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center text-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <INPAL />
          <h1 className="mb-8 leading-relaxed mt-10 title-font sm:text-4xl text-3xl font-medium text-gray-900">
            인테리어 중개플랫폼,
            <br className="hidden lg:inline-block" />
            인공지능을 품다.
          </h1>
          <Link href="/brand">
            <a className="inline-block text-white bg-primary-color w-full text-center border-0 py-2 px-6 focus:outline-none hover:bg-secondary-color rounded text-lg duration-500">
              체험하기
            </a>
          </Link>
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:mr-10 lg:pl-24 md:pl-16 flex md:items-center md:text-left items-center text-center justify-center md:justify-end">
          <div className="flex justify-center w-3/4 md:w-1/2">
            <video controls src="/QuickGuide.mp4" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
