export default function Section02() {
  return (
    <section className="section02 relative max-h-screen h-screen container mx-auto flex 2xl:px-5 px-20 py-24 md:flex-row flex-col items-center justify-center z-10">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white z-10">
        <h1
          className="title-font 2xl:text-8xl sm:text-6xl text-3xl 2xl:mb-28 mb-10 font-bold text-white"
          data-aos="fade-up"
        >
          Hello
          <br />I am A2i.
        </h1>
        <h1
          className="title-font 2xl:text-3xl sm:text-2xl text-xl 2xl:mb-40 mb-20 font-medium"
          data-aos="fade-up"
        >
          [ 안녕하세요 나는 A2i입니다. ]
        </h1>
        <p
          className="mb-4 2xl:text-2xl sm:text-xl text-lg leading-relaxed"
          data-aos="fade-up"
        >
          A2I는 기술의 발전이 기술로써 그치는 것이 아닌,
          <br />
          삶의 질을 향상 시켜 사회문화 기술이 될 수 있도록 노력합니다.
        </p>
        <img src="deco.png" style={{ width: "200px" }} />
      </div>
    </section>
  );
}
