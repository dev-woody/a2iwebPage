import { historys } from "../../lib/historys";
import Gradation from "/public/image/gradation.svg";

export default function History() {
  return (
    <section className="text-gray-600 body-fon bg-black relative">
      <div className="absolute lg:w-1/3 md:w-3/4 w-3/4 md:top-20 md:left-1/2 top-10 left-10">
        <Gradation className="blur" />
      </div>
      <div className="absolute lg:w-1/5 md:w-1/4 w-3/4 md:top-1/2 md:left-1/4 top-20 left-10">
        <Gradation className="blur" />
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 flex flex-col items-start mb-20 text-left">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white text-left">
            History
          </h1>
          <h1 className="flex-grow sm:pr-16 text-2xl sm:text-4xl font-medium title-font text-white">
            A2I Inc.는
            <span className="text-primary-color"> 꾸준히 한걸음씩 성장</span>
            해나가고 있습니다.
          </h1>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 w-full items-end lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow sm:mr-20 mr-0">
              {historys.map((history, index) => {
                return (
                  <div key={index} className="mb-10">
                    <h2 className="text-white text-lg sm:text-3xl title-font font-medium mb-3">
                      {history.years}
                    </h2>
                    <p className="leading-relaxed text-white sm:text-xl">
                      {history.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
