import Link from "next/link";

export default function SectionLast() {
  return (
    <section className="section06 relative container h-screen mx-auto flex px-5 py-24 items-center justify-start flex-col z-50">
      <img src="arms.svg" alt="arms" className="w-3/4 mb-10" />
      <div className="text-center lg:w-2/3 w-full mb-28">
        <h1 className="md:text-5xl text-2xl font-medium title-font text-white">
          라이프 스타일 솔루션을
          <br />
          경험하세요.
        </h1>
        <p className="leading-relaxed mt-4 mb-4 text-white">
          UI/UX 기획부터 앱 개발까지...
          <br className="sm:hidden block" /> 혁신적인 고객경험을 제공합니다.
        </p>
        <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
          이메일 : ceo.alexpark@a2ikorea.com
        </h2>
        <h2 className="text-xs text-white tracking-widest font-medium title-font mb-10">
          전화번호 : 010-5007-0844
        </h2>
        <Link href="/connect">
          <button className=" text-white border-white border-2 py-2 px-8 focus:outline-none hover:bg-secondary-color hover:border-0 rounded text-lg mt-10 sm:mt-0 duration-300 z-50">
            연락하기
          </button>
        </Link>
      </div>
    </section>
  );
}
