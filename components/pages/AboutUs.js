import LogoGray from "/public/image/logo-gray.svg";

export default function AboutUs() {
  return (
    <section className=" body-font min-h-screen">
      <div className="container mx-auto h-screen flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-8xl text-3xl mb-20 font-medium text-gray-900">
            About Us
          </h1>
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
            SERVICE BECOMES A
            <br className="hidden lg:inline-block" />
            THROUGH TECHNOLOGY AND INNOVATION.
          </h1>
          <p className="mb-8 leading-relaxed sm:text-2xl">
            기술, 혁신으로 서비스가 되다.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <LogoGray className="md:w-3/5 md:mb-0 mb-20" />
        </div>
      </div>
    </section>
  );
}
