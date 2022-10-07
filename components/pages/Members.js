import CEO from "/public/image/ceo.svg";
import CTO from "/public/image/cto.svg";
import COO from "/public/image/coo.svg";
import Advice1 from "/public/image/advice1.svg";
import Advice2 from "/public/image/advice2.svg";
import Frontend from "/public/image/frontend.svg";

export default function Members() {
  return (
    <section className="text-white body-font bg-black pb-44">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col items-start mb-20 text-left">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white text-left">
            Our Team
          </h1>
          <h1 className="flex-grow sm:pr-16 text-2xl sm:text-4xl font-medium title-font text-white">
            A2I Inc.는
            <br className="sm:hidden block" />
            <span className="text-primary-color">
              &nbsp;각 분야의 10년 이상 전문가와 함께 합니다.
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center lg:w-full mx-auto  pb-10 mb-20 sm:flex-row flex-col">
          <CEO className="sm:w-72 sm:h-72 h-24 w-24 sm:mr-40 inline-flex items-center justify-center flex-shrink-0" />
          <div className=" sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg sm:text-5xl title-font font-medium mb-2">
              CEO
            </h2>
            <h2 className=" text-lg sm:text-4xl title-font font-medium mb-2 sm:mb-10">
              “항상 변화를 받아들일 줄 알아야 한다.”
            </h2>
            <p className="leading-relaxed text-base sm:text-2xl">
              前 (주) 닷투비 대표이사
              <br />前 삼성계열사 개발자
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-full mx-auto pb-10 mb-20 sm:flex-row flex-col">
          <div className=" sm:text-right text-center mt-6 sm:mt-0">
            <h2 className=" text-lg sm:text-5xl title-font font-medium mb-2 ">
              CTO
            </h2>
            <h2 className=" text-lg sm:text-4xl title-font font-medium mb-2 sm:mb-10">
              “컴퓨터는 거짓말을 하지않는다.”
            </h2>
            <p className="leading-relaxed text-base sm:text-2xl">
              소프트웨어 경력 20년
              <br />
              정보통신공학 석사
              <br />
              어플리케이션 프로그램 개발
            </p>
          </div>
          <CTO className="sm:w-72 sm:h-72 h-24 w-24 order-first sm:ml-40 inline-flex items-center justify-center flex-shrink-0" />
        </div>
        <div className="flex items-center justify-center lg:w-full mx-auto pb-10 mb-20 sm:flex-row flex-col">
          <COO className="sm:w-72 sm:h-72 h-24 w-24 sm:mr-40 inline-flex items-center justify-center flex-shrink-0" />
          <div className=" sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg sm:text-5xl title-font font-medium mb-2">
              COO
            </h2>
            <h2 className="0 text-lg sm:text-4xl title-font font-medium mb-2 sm:mb-10">
              “다양한 시각으로 바라보고 생각해라.”
            </h2>
            <p className="leading-relaxed text-base sm:text-2xl">
              네트워크 솔루션 제안 및 응용
              <br />
              네트워크 솔루션 개발 경력 20년
              <br />
              정보통신공학 학사
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:my-20 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Frontend className="sm:w-48 sm:h-48 h-24 w-24 inline-flex items-center justify-center mb-5 flex-shrink-0" />
            <div className="flex-grow">
              <h2 className="sm:text-3xl text-lg title-font font-medium mb-3">
                Frontend Dev, UI/UX Designer
              </h2>
              <p className="leading-relaxed sm:text-base text-base">
                React, Next.js 개발자
                <br />
                일러스트, 포토샵 등 편집툴 사용
                <br />
                프리미어 프로, 에프터 이펙트 영상편집
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Advice1 className="sm:w-48 sm:h-48 h-24 w-24 inline-flex items-center justify-center mb-5 flex-shrink-0" />
            <div className="flex-grow">
              <h2 className="sm:text-3xl text-lg title-font font-medium mb-3">
                인테리어 자문 1
              </h2>
              <p className="leading-relaxed sm:text-base text-base">
                홍익대학교 공간디자인 박사
                <br />
                공간디자인학회
                <br />
                사무총장/ 모대학교 겸임교수
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <Advice2 className="sm:w-48 sm:h-48 h-24 w-24 inline-flex items-center justify-center mb-5 flex-shrink-0" />
            <div className="flex-grow">
              <h2 className="sm:text-3xl text-lg title-font font-medium mb-3">
                인테리어 자문 2
              </h2>
              <p className="leading-relaxed sm:text-base text-base">
                대형 건설사 인테리어 설계 리더
                <br />
                홍익대학교 공간디자인 박사 과정
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
