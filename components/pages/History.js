import { historys } from "../../lib/historys";
import Image from "next/image";

export default function History() {
  const History = ({ years, text, icon }) => {
    return (
      <div className="flex relative pb-12">
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          {icon}
        </div>
        <div className="flex-grow pl-4">
          <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            {years}
          </h2>
          <p className="leading-relaxed">{text}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A2I Korea는 꾸준히 한걸음씩 성장해 나가고 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {historys.map((hestory) => {
              return (
                <>
                  <History
                    years={hestory.years}
                    text={hestory.text}
                    icon={hestory.icon}
                  />
                </>
              );
            })}
          </div>
          <div className="lg:w-3/5 lg:h-auto md:w-1/2 md:h-auto object-cover object-center rounded-lg md:mt-0 mt-12 bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
}
