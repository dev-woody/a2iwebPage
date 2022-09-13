import Link from "next/link";

export default function SectionLast() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
            A2I와 함께
            <br />
            라이프 스타일 솔루션을 경험하세요.
          </h1>
          <p className="leading-relaxed mt-4 mb-4">
            UI/UX 기획부터 앱 개발까지... 혁신적인 고객경험을 제공합니다.
          </p>
          <h2 className="text-xs text-primary-color tracking-widest font-medium title-font mb-1">
            이메일 : ceo.alexpark@a2ikorea.com
          </h2>
          <h2 className="text-xs text-primary-color tracking-widest font-medium title-font mb-1">
            전화번호 : 010-5007-0844
          </h2>
        </div>
        <div className="flex md:ml-auto md:mr-auto mx-auto items-center flex-shrink-0 space-x-4">
          <Link href="/connect">
            <button className="flex-shrink-0 text-white bg-primary-color border-0 py-2 px-8 focus:outline-none hover:bg-secondary-color rounded text-lg mt-10 sm:mt-0 duration-500">
              연락하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
