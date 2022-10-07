import Link from "next/link";

export default function SectionLast() {
  return (
    <section className="flex h-screen flex-col items-center body-font justify-center">
      <div className="container sm:px-5 py-24 sm:mx-auto mx-0 px-0 z-10">
        <div className="flex flex-col items-center justify-center lg:w-3/5 mx-auto text-white text-center h-full w-screen">
          <h1
            className="md:text-5xl text-2xl font-medium title-font"
            data-aos="fade-up"
          >
            라이프 스타일 솔루션을
            <br />
            경험하세요.
          </h1>
          <p className="leading-relaxed mt-4 mb-4" data-aos="fade-up">
            UI/UX 기획부터 앱 개발까지...
            <br className="sm:hidden block" /> 혁신적인 고객경험을 제공합니다.
          </p>
          <h2
            className="text-xs text-white tracking-widest font-medium title-font mb-1"
            data-aos="fade-up"
          >
            이메일 : ceo.alexpark@a2ikorea.com
          </h2>
          <h2
            className="text-xs text-white tracking-widest font-medium title-font mb-10"
            data-aos="fade-up"
          >
            전화번호 : 010-5007-0844
          </h2>
          <Link href="/connect">
            <button
              className=" text-white border-white border-2 py-2 px-8 focus:outline-none hover:bg-secondary-color hover:border-0 rounded text-lg mt-10 sm:mt-0 duration-300"
              data-aos="fade-up"
            >
              연락하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
