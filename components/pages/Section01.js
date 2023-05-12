export default function Section01() {
  return (
    <section
      className="section01 relative max-h-screen h-screen container mx-auto flex lg:px-5 px-20 py-24 md:flex-row flex-col items-center lx:justify-center justify-start z-30"
      id="cercle"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font lg:text-8xl sm:text-6xl text-3xl mb-8 font-bold text-none tracking-widest text-secondary-color">
          기술,
        </h1>
        <h1 className="title-font lg:text-8xl sm:text-6xl text-3xl mb-8 font-bold text-secondary-color">
          혁신으로
        </h1>
        <h1 className="title-font lg:text-8xl sm:text-6xl text-3xl mb-8 font-bold text-secondary-color">
          서비스가 되다.
        </h1>
        <p className="mb-8 sm:text-lg text-1xl leading-relaxed text-gray-600">
          SERVICE BECOMES A THROUGH TECHNOLOGY AND INNOVATION.
        </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
    </section>
  );
}
