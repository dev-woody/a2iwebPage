import Animation from "../Animation";

export default function Section01() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            의식주를 아우르는
            <br className="hidden lg:inline-block" />
            라이프 스타일 플랫폼
          </h1>
          <p className="mb-8 leading-relaxed">
            인공지능 솔루션을 기반으로 고객이 원하는 사회문화 기술을 구현합니다.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
    </section>
  );
}
