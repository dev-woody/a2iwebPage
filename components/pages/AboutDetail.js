import Gradation from "/public/image/gradation.svg";

import Icon1 from "/public/image/icon1.svg";
import Icon2 from "/public/image/icon2.svg";
import Icon3 from "/public/image/icon3.svg";

export default function AboutDetail() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
          <div className="absolute lg:w-1/3 md:w-3/4 w-3/4 md:top-20 md:left-40 top-10 left-10">
            <Gradation className="blur" />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
          <div className="lg:flex-grow md:w-1/2 md:mr-20 mr-0 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 mt-10 font-medium text-gray-900">
              혁신과 함께하는 기업,
              <span className="text-secondary-color">A2I Inc.</span>
            </h1>
            <p className="mb-8 leading-loose tracking-wide sm:text-2xl">
              저희 에이투아이는 인공지능 솔루션을 기반으로 고객이 원하는
              사회문화 기술을 구현한다는 비전을 가지고 설립되었습니다. 기술의
              혁신을 통해 다양한 서비스를 제공하고 삶의 질을 향상시킵니다.
              트렌드 변화에 맞춰 개인의 취향이 존중되는 인공지능 솔루션 기술을
              개발해왔습니다.
            </p>
            <p className="mb-8 leading-relaxed tracking-wide font-bold sm:text-2xl">
              A2I는 기술의 발전이 기술로써 그치는 것이 아닌 삶의 질을 향상 시켜
              사회문화 기술이 될 수 있도록 노력합니다. 기술을 바탕으로
              개인맞춤화된 사회를 연결하여 하나의 문화가 되는 미래를 지향합니다.
            </p>
          </div>
        </div>
      </section>
      {/** 구분선 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col items-start mb-20 text-left">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900 text-left">
              About
            </h1>
            <h1 className="flex-grow sm:pr-16 text-2xl sm:text-4xl font-medium title-font text-gray-900">
              <span className="text-secondary-color">A</span> (artificial 인공)
              <span className="text-secondary-color">to I</span> (intelligence
              지능),
              <br />
              인공에서 지능으로 나아가다.
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 bg-white border-gray-200 drop-shadow-md border-opacity-60 rounded-2xl overflow-hidden flex flex-col items-center">
                <Icon1 className="p-24" />
                <div className="p-6 text-center">
                  <h1 className="title-font text-lg sm:text-4xl font-medium text-gray-900 mb-3">
                    VISION
                  </h1>
                  <p className="leading-relaxed mb-3 sm:text-2xl">
                    인공지능 솔루션을 기반으로 고객의 취향이 존중되어 고객이
                    원하는 서비스를 즉시 제공 받을 수 있는 사회문화 기술을
                    구현한다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 bg-white border-gray-200 drop-shadow-md border-opacity-60 rounded-2xl overflow-hidden flex flex-col items-center">
                <Icon2 className="p-24" />
                <div className="p-6 text-center">
                  <h1 className="title-font text-lg sm:text-4xl font-medium text-gray-900 mb-3">
                    MISSION
                  </h1>
                  <p className="leading-relaxed mb-3 sm:text-2xl">
                    AI solution for Improvement and Infuence. 인공지능 솔루션
                    개발을 통해서 인류 삶의 질을 향상 시키고, 사회문화에 영향을
                    미친다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 bg-white border-gray-200 drop-shadow-md border-opacity-60 rounded-2xl overflow-hidden flex flex-col items-center">
                <Icon3 className="p-24" />
                <div className="p-6 text-center">
                  <h1 className="title-font text-lg sm:text-4xl font-medium text-gray-900 mb-3">
                    CORE VALUES
                  </h1>
                  <p className="leading-relaxed mb-3 sm:text-2xl">
                    소비자와 기업간의 직접거래를 통한 비용절감 및 소비자의 개인
                    취향을 존중한다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
