export default function Section02() {
  return (
    <section className="section02 relative max-h-screen h-screen container mx-auto flex lg:px-5 px-8 py-10 md:flex-row flex-col items-center lx:justify-center justify-start z-30">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
        <h1
          className="title-font lg:text-8xl text-3xl lg:mb-28 mb-10 font-bold  text-primary-color"
          data-aos="fade-up"
        >
          Hello
          <br />I am A2i.
        </h1>
        <h1
          className="title-font lg:text-3xl sm:text-lg text-md lg:mb-40 mb-20 font-medium"
          data-aos="fade-up"
        >
          [ 안녕하세요 저는 A2i입니다. ]
        </h1>
        <p
          className="mb-4 lg:text-lg sm:text-xl text-md leading-relaxed"
          data-aos="fade-up"
        >
          A2I는 기술의 발전이 기술로써 그치는 것이 아닌,
          <br />
          삶의 질을 향상 시켜 사회문화 기술이 될 수 있도록 노력합니다.
        </p>
        <img src="deco.png" className="lx:w-1/6 lg:w-1/5 w-1/3" />
      </div>
    </section>
  );
}
