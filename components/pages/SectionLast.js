import Link from "next/link";

export default function SectionLast() {
  return (
    <section
      className="flex min-h-screen h-screen flex-col items-center justify-center body-font "
      data-aos="fade-up"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center justify-center lg:w-3/5 mx-auto text-white text-center h-full w-screen">
          <h1 className="md:text-5xl text-2xl font-medium title-font ">
            라이프 스타일 솔루션을
            <br />
            경험하세요.
          </h1>
          <p className="leading-relaxed mt-4 mb-4">
            UI/UX 기획부터 앱 개발까지... 혁신적인 고객경험을 제공합니다.
          </p>
          <h2 className="text-xs text-primary-color tracking-widest font-medium title-font mb-1">
            이메일 : ceo.alexpark@a2ikorea.com
          </h2>
          <h2 className="text-xs text-primary-color tracking-widest font-medium title-font mb-10">
            전화번호 : 010-5007-0844
          </h2>
          <Link href="/connect">
            <button className=" text-white border-primary-color border-2 py-2 px-8 focus:outline-none hover:bg-secondary-color hover:border-0 rounded text-lg mt-10 sm:mt-0 duration-300">
              연락하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
