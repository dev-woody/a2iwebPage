import CEO from "/public/image/ceo.svg";
import CTO from "/public/image/cto.svg";
import COO from "/public/image/coo.svg";
import Frontend from "/public/image/frontend.svg";
import Advice from "/public/image/advice.svg";
import Advice2 from "/public/image/advice2.svg";

export const members = [
  {
    name: "Alex Park",
    img: <CEO className="w-48 h-48 object-cover object-center sm:mb-0 mb-4" />,
    title: "CEO",
    career: ["前 (주) 닷투비 대표이사", "前 삼성계열사 개발자"],
  },
  {
    name: "H Song",
    img: <CTO className="w-48 h-48 object-cover object-center sm:mb-0 mb-4" />,
    title: "CTO",
    career: [
      "어플리케이션 프로그램 개발",
      "소프트웨어 경력 20년",
      "정보통신공학 석사",
    ],
  },
  {
    name: "SH. Han",
    img: <COO className="w-48 h-48 object-cover object-center sm:mb-0 mb-4" />,
    title: "COO",
    career: [
      "네트워크 솔루션 제인 및 응용",
      "네트워크 솔류션 개발 경력 20년",
      "정보통신공학 학사",
    ],
  },
  {
    name: "Woody",
    img: (
      <Frontend className="w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
    ),
    title: "Frontend Dev, UX/UI Designer",
    career: ["react, next.js 개발자", "일러스트, 포토샵, 영상편집"],
  },
  {
    name: "인테리어 자문 1",
    img: (
      <Advice className="w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
    ),
    title: "인테리어 자문 1",
    career: [
      "홍익대학교 공간디자인 박사",
      "공간디자인학회 사무총장/모대학교 겸임교수",
    ],
  },
  {
    name: "인테리어 자문 2",
    img: (
      <Advice2 className="w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
    ),
    title: "인테리어 자문 2",
    career: [
      "대형 건설사 인테리어 설계 리더",
      "홍익대학교 공간디자인 박사 과정",
    ],
  },
];
