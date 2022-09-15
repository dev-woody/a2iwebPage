import Seo from "../components/Seo";
import INPAL from "/public/icon-logo.svg";

export default function Brand() {
  return (
    <div classNameName="w-full">
      <Seo title="Brand" />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-20 object-cover object-center rounded">
            <INPAL />
          </div>
          <div className=" lg:w-3/4 w-full mt-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              인공지능 솔루션을 품은 인테리어 플랫폼
            </h1>
            <p className="mb-8 leading-relaxed text-1xl">
              현존하는 인테리어 중계 플렛폼은 단순히 중개에 그치고 있습니다.
              <br />
              에이투아이&#40;주&#41;의 &#39;인테리어 팔레트&#39;는 고객이 직접
              디자인 체험을 할 수 있는 기술 중심으로 개발된 중개 플랫폼입니다.
              <br />
              인공지능 기술이 내재된 증강현실&#40;AR&#41; 기술을 활용한
              &#39;디자인 시뮬레이터&#39; 기능을 통해 실제 시공 결과와 유사한
              디자인 체험을
              <br />
              핸드폰을 통해 경험 할 수 있도록 지원합니다.
            </p>
          </div>
          <div className=" lg:w-3/4 w-full mt-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              스스로의 삶을 디자인하다
            </h1>
            <p className="mb-8 leading-relaxed text-1xl">
              디자인 시뮬레이터는 고가의 장비나 프로그램 없이도 디자이너의
              역할을 거뜬히 해내줄 수 있는 기술로써,
              <br />
              소비자가 자신의 취향에 맞추어 주도적인 디자인 체험이 가능한
              서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
