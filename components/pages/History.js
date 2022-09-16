import { historys } from "../../lib/historys";
import Image from "next/image";
import historyImg from "/public/image/historyImg.jpg";

export default function History() {
  const History = ({ years, text, icon }) => {
    return (
      <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-color inline-flex items-center justify-center text-white relative z-10">
          {icon}
        </div>
        <div className="flex-grow sm:pl-6 lg:mt-6 md:mt-6 ml-4 sm:mt-0">
          <h2 className="font-medium title-font text-gray-800 mb-1 text-xl">
            {years}
          </h2>
          <p className="leading-relaxed text-gray-400">{text}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap relative lg:h-screen md:h-auto">
        <div className="flex flex-col text-center w-full mb-20 left-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A2I Inc.는 꾸준히 한걸음씩 성장해 나가고 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap w-full lg:overflow-hidden md:overflow-auto lg:h-2/3 md:h-auto">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 lg:h-full md:h-auto overflow-scroll">
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
          <div className="lg:w-3/5 md:w-1/2 rounded-lg md:mt-0 mt-12 h-auto">
            <Image
              src={historyImg}
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={historyImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
