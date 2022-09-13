import Seo from "../components/Seo";
import INPAL from "/public/icon-logo.svg";

export default function Brand() {
  return (
    <div className="w-full, min-h-screen">
      <Seo title="Brand" />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="lg:w-2/6 md:w-3/6 w-5/6 mb-20 object-cover object-center rounded">
            <INPAL />
          </div>
          <div class=" lg:w-3/4 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              인공지능 솔루션을 품은 인테리어 플렛폼
            </h1>
            <p class="mb-8 leading-relaxed text-2xl">
              현존하는 인테리어 중계 플렛폼은 단순히 중계에 그칩니다.
              <br />
              에이투아이의 '인테리어 팔레트'는 고객이 직접 디자인 체험을 할 수
              있는 기술 중심으로 개발된 중계 플렛폼입니다.
              <br />
              인공지능 기술이 내재된 증강현실(AR) 기술을 활용한 ‘디자인
              시뮬레이터' 기능을 통해 실제 시공 결과와 유사한 디자인 체험을
              핸드폰을 통해 경험 할 수 있도록 지원합니다.
            </p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              스스로의 삶을 디자인하다
            </h1>
            <p class="mb-8 leading-relaxed text-2xl">
              디자인 시뮬레이터는 고가의 장비나 프로그램 등이 없이도 디자이너의
              역할을 거뜬히 해내줄 수 있는 기술
              <br />
              결론적으로 소비자가 자신의 취향에 맞추어 주도적인 디자인 체험이
              가능한 서비스를 제공
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
