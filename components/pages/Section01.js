export default function Section01() {
  return (
    <section className=" h-screen container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white z-10">
        <h1
          className="title-font sm:text-7xl text-3xl mb-8 font-medium text-primary-color"
          data-aos="fade-up"
        >
          기술,
        </h1>
        <h1
          className="title-font sm:text-3xl text-2xl mb-12 font-medium"
          data-aos="fade-up"
        >
          혁신으로 서비스가 되다.
        </h1>
        <p
          className="mb-8 sm:text-2xl text-1xl leading-relaxed"
          data-aos="fade-up"
        >
          A2I는 기술의 발전이 기술로써 그치는 것이 아닌,
          <br />
          삶의 잘을 향상시켜 사회문화 기술이 될 수 있도록 노력합니다.
        </p>
      </div>
    </section>
  );
}
