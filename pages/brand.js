import Seo from "../components/Seo";
import INPAL from "/public/image/icon-logo.svg";

export default function Brand() {
  return (
    <div>
      <Seo title="Brand" />
      <section className="body-font min-h-screen">
        <div className="container mx-auto h-screen flex px-5 py-24 md:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-8xl text-3xl mb-20 font-medium text-gray-900">
              BRAND
            </h1>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              WITH ARTIFICIAL INTELLIGENCE SOLUTIONS
              <br className="hidden lg:inline-block" />
              PERSONALIZED DESIGN SERVICE
            </h1>
            <p className="mb-8 leading-relaxed sm:text-2xl">
              인공지능 솔루션으로 맞춤형 디자인 서비스
            </p>
          </div>
        </div>
        <div
          className="mx-auto min-h-screen flex px-5 py-24 items-center justify-center flex-col"
          style={{ background: "#FAFAFA" }}
        >
          <INPAL className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
        </div>
        <div className="mx-auto h-screen flex md:flex-row flex-col px-5 items-center justify-center bg-inpal-primary">
          <div className="container lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
            <h1 className="title-font sm:text-8xl text-3xl mb-20 font-medium text-inpal-secondary">
              INPAL
            </h1>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium">
              인공지능 솔루션을 품은{" "}
              <span className="text-inpal-secondary">인테리어 플랫폼</span>
            </h1>
            <p className="mb-8 leading-relaxed w-1/2 sm:text-xl">
              현존하는 인테리어 중계 플렛폼은 단순히 중개에 그치고 있습니다.
              에이투아이(주)의 ‘인테리어 팔레트’는 고객이 직접 디자인 체험을 할
              수 있는 기술 중심으로 개발된 중개 플랫폼입니다. 인공지능 기술이
              내재된 증강현실(AR) 기술을 활용한 ‘디자인 시뮬레이터’ 기능을 통해
              실제 시공 결과와 유사한 디자인 체험을 핸드폰을 통해 경험 할 수
              있도록 지원합니다.
            </p>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium">
              <span className="text-inpal-secondary">스스로의 삶을 </span>
              디자인하다
            </h1>
            <p className="mb-8 leading-relaxed w-1/2 sm:text-xl">
              디자인 시뮬레이터는 고가의 장비나 프로그램 없이도 디자이너의
              역할을 거뜬히 해내줄 수 있는 기술로써, 소비자가 자신의 취향에
              맞추어 주도적인 디자인 체험이 가능한 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
