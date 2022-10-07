export default function Section05() {
  return (
    <section className=" container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center xl:hidden z-10">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-left text-white z-10">
        <h1
          className="title-font sm:text-7xl text-3xl mb-8 font-medium text-primary-color"
          data-aos="fade-up"
        >
          Our Team
        </h1>
        <p
          className="mb-8 sm:text-2xl text-1xl leading-relaxed"
          data-aos="fade-up"
        >
          Front developer
        </p>
        <p
          className="mb-8 sm:text-2xl text-1xl leading-relaxed"
          data-aos="fade-up"
        >
          Server developer
        </p>
        <p
          className="mb-8 sm:text-2xl text-1xl leading-relaxed"
          data-aos="fade-up"
        >
          AI developer
        </p>
        <p
          className="mb-8 sm:text-2xl text-1xl leading-relaxed"
          data-aos="fade-up"
        >
          UI/UX Designer
        </p>
      </div>
    </section>
  );
}
