export default function Section02() {
  return (
    <section className="h-screen container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white z-10">
        <h1
          className="title-font sm:text-7xl text-3xl mb-8 font-medium text-primary-color"
          data-aos="fade-up"
        >
          라이프 스타일 플랫폼,
        </h1>
        <h1
          className="title-font sm:text-3xl text-2xl mb-12 font-medium"
          data-aos="fade-up"
        >
          의식주를 아우르다.
        </h1>
        <p
          className="mb-8 sm:text-2xl text-1xl leading-relaxed"
          data-aos="fade-up"
        >
          A2I는 인공지능 솔루션을 기반으로
          <br />
          고객이 원하는 사회문화 기술을
          <br className="sm:hidden block" /> 구현한다는 비젼을 가지고
          설립되었습니다.
        </p>
      </div>
    </section>
  );
}
