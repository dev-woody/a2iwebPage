import Link from "next/link";
import INPAL from "/public/icon-logo.svg";

export default function Section02() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <INPAL />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex justify-center md:items-center md:text-left items-center text-center">
          <div className="flex flex-col">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              INPAL
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              인테리어 중계플랫폼,
              <br className="hidden lg:inline-block" />
              인공지능을 품다.
            </p>
          </div>
          <div className="flex justify-center ml-10">
            <Link href="/brand">
              <button className="inline-flex text-white bg-primary-color border-0 py-2 px-6 focus:outline-none hover:bg-secondary-color rounded text-lg duration-500">
                체험하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
