import Seo from "../../components/Seo";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useState } from "react";
import Link from "next/link";

export default function Collect() {
  const [page, setPage] = useState("");
  return (
    <div classNameName="w-full min-h-screen overflow-x-hidden">
      <Seo title="Policy" />
      <Header />
      <div className="flex flex-col text-center w-full mt-12 mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          약관 및 정책
        </h1>
      </div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="">
              <a className="mr-5 hover:text-gray-900">이용약관</a>
            </Link>
            <Link href="/policy/collect">
              <a className="mr-5 hover:text-gray-900">개인정보 처리방침</a>
            </Link>
            {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto text-left ">
            <p>
              &#60; 에이투아이(주) &#62;(&#39;www.inpal.co.kr&#39;이하
              &#39;INPAL&#39;)은(는) 「개인정보 보호법」 제30조에 따라
              정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
              원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
              처리방침을 수립·공개합니다.
              <br />○ 이 개인정보처리방침은 2023년 4월 1부터 적용됩니다.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-2">
              제1조(개인정보의 처리 목적)
            </h2>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-md mb-10">
              &#60; 에이투아이(주) &#62;(&#39;www.inpal.co.kr&#39;이하
              &#39;INPAL&#39;)은(는) 다음의 목적을 위하여 개인정보를 처리합니다.
              처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
              않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에
              따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </h2>
            <p className="leading-relaxed text-md mb-10">
              1. 홈페이지 회원가입 및 관리 회원 가입의사 확인, 회원제 서비스
              제공에 따른 본인 식별·인증, 회원자격 유지·관리 목적으로 개인정보를
              처리합니다.
              <br />
              <br />
              2. 재화 또는 서비스 제공 물품배송, 서비스 제공, 계약서·청구서
              발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증,
              요금결제·정산을 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              3. 마케팅 및 광고에의 활용 신규 서비스(제품) 개발 및 맞춤 서비스
              제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 인구통계학적
              특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인,
              접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로
              개인정보를 처리합니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제2조(개인정보의 처리 및 보유 기간)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① &#60; 에이투아이(주) &#62;은(는) 법령에 따른 개인정보
              보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
              개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              <br />
              <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <br />
              1.&#60;홈페이지 회원가입 및 관리&#62; &#60;홈페이지 회원가입 및
              관리&#62;와 관련한 개인정보는 수집.이용에 관한
              동의일로부터&#60;5년&#62;까지 위 이용목적을 위하여
              보유.이용됩니다.
              <br />
              보유근거 : 정보보호 및 확인 관련법령 <br />
              1&#41; 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 <br />
              2&#41; 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 <br />
              3&#41; 대금결제 및 재화 등의 공급에 관한 기록 : 5년 <br />
              4&#41; 계약 또는 청약철회 등에 관한 기록 : 5년 <br />
              예외사유 : 해당사항 없음
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제3조(처리하는 개인정보의 항목)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① &#60; 에이투아이(주) &#62;은(는) 다음의 개인정보 항목을 처리하고
              있습니다. <br />
              1&#60; 홈페이지 회원가입 및 관리 &#62; 필수항목 : 이메일,
              휴대전화번호, 자택주소, 비밀번호, 로그인ID, 생년월일, 이름,
              회사전화번호, 회사명, 나머지 <br />
              선택항목 : 나머지
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제4조(개인정보의 제3자 제공에 관한 사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① &#60; 에이투아이(주) &#62;은(는) 개인정보를 제1조(개인정보의
              처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
              법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에
              해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              <br />
              <br />② &#60; 에이투아이(주) &#62;은(는) 다음과 같이 개인정보를
              제3자에게 제공하고 있습니다.
              <br />
              1. &#60; InPal 플랫폼 운영관리팀 &#62; 개인정보를 제공받는 자 :
              InPal 플랫폼 운영관리팀 제공받는 자의 개인정보 이용목적 : 이메일,
              휴대전화번호, 자택주소, 자택전화번호 제공받는 자의 보유.이용기간:
              5년
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제5조(개인정보처리의 위탁에 관한 사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① &#60; 에이투아이(주) &#62;은(는) 원활한 개인정보 업무처리를
              위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              <li>1. &#60; InPal 플랫폼 운영관리팀 &#62;</li>
              <li>위탁받는 자 (수탁자) : 에이투아이 주식회사</li>
              <li>
                위탁하는 업무의내용 : 구매 및 요금 결제, 물품배송 또는 청구서 등
                발송, 본인인증(금융거래, 금융서비스), 회원제 서비스 이용에 따른
                본인확인, 불만처리 등 민원처리, 고지사항 전달, 신규 서비스(제품)
                개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회
                제공
              </li>
              <li>위탁기간 : 5년</li>
              <br />② &#60; 에이투아이(주) &#62;은(는) 위탁계약 체결시
              「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보
              처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
              관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
              명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
              있습니다.
              <br />
              <br />③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
              개인정보 처리방침을 통하여 공개하도록 하겠습니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제6조(개인정보의 파기절차 및 파기방법)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① &#60; 에이투아이(주) &#62; 은(는) 개인정보 보유기간의 경과,
              처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당
              개인정보를 파기합니다.
              <br />
              <br />② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
              처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
              계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
              <br />
              1. 법령 근거 :<br />
              2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
              <br />
              <br />③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              <br />
              1. 파기절차
              <br />
              &#60; 에이투아이(주) &#62; 은(는) 파기 사유가 발생한 개인정보를
              선정하고, &#60; 에이투아이(주) &#62; 의 개인정보 보호책임자의
              승인을 받아 개인정보를 파기합니다.
              <br />
              2. 파기방법
              <br />
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
              통하여 파기합니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한
              사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① 정보주체는 에이투아이(주)에 대해 언제든지 개인정보
              열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
              <br />
              <br />② 제1항에 따른 권리 행사는에이투아이(주)에 대해 「개인정보
              보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
              등을 통하여 하실 수 있으며 에이투아이(주)은(는) 이에 대해 지체
              없이 조치하겠습니다.
              <br />
              <br />③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
              받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리
              방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
              제출하셔야 합니다.
              <br />
              <br />④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」
              제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수
              있습니다.
              <br />
              <br />⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가
              수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
              <br />
              <br />⑥ 에이투아이(주)은(는) 정보주체 권리에 따른 열람의 요구,
              정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가
              본인이거나 정당한 대리인인지를 확인합니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-2">
              제8조(개인정보의 안전성 확보조치에 관한 사항){" "}
            </h2>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-md mb-10">
              &#60; 에이투아이(주) &#62;은(는) 개인정보의 안전성 확보를 위해
              다음과 같은 조치를 취하고 있습니다.
            </h2>
            <p className="leading-relaxed text-md mb-10">
              1. 개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원을
              지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을
              시행하고 있습니다.
              <br />
              <br />
              2. 접속기록의 보관 및 위변조 방지 개인정보처리시스템에 접속한
              기록을 최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의
              정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는
              민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다.
              또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을
              사용하고 있습니다.
              <br />
              <br />
              3. 개인정보에 대한 접근 제한 개인정보를 처리하는
              데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여
              개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며
              침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고
              있습니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제9조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에
              관한 사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① 에이투아이(주) 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기
              위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를
              사용합니다.
              <br />
              <br />② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가
              이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
              컴퓨터내의 하드디스크에 저장되기도 합니다.
              <br />
              가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에
              대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
              이용자에게 최적화된 정보 제공을 위해 사용됩니다.
              <br />
              나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구&#62;인터넷
              옵션&#62;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
              있습니다.
              <br />
              다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할
              수 있습니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제10조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              행태정보의 수집·이용·제공 및 거부등에 관한 사항
              <br />
              &#60;개인정보처리자명&#62;은(는) 온라인 맞춤형 광고 등을 위한
              행태정보를 수집·이용·제공하지 않습니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제11조(추가적인 이용·제공 판단기준)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              &#60; 에이투아이(주) &#62; 은(는) ｢개인정보 보호법｣ 제15조제3항 및
              제17조제4항에 따라 ｢개인정보 보호법 시행령｣ 제14조의2에 따른
              사항을 고려하여 정보주체의 동의 없이 개인정보를 추가적으로
              이용·제공할 수 있습니다.
              <br />
              이에 따라 &#60; 에이투아이(주) &#62; 가(이) 정보주체의 동의 없이
              추가적인 이용·제공을 하기 위해서 다음과 같은 사항을
              고려하였습니다.
              <br />
              <br />▶ 개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집
              목적과 관련성이 있는지 여부
              <br />
              <br />▶ 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때
              추가적인 이용·제공에 대한 예측 가능성이 있는지 여부
              <br />
              <br />▶ 개인정보의 추가적인 이용·제공이 정보주체의 이익을 부당하게
              침해하는지 여부
              <br />
              <br />▶ 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를
              하였는지 여부 ※ 추가적인 이용·제공 시 고려사항에 대한 판단기준은
              사업자/단체 스스로 자율적으로 판단하여 작성·공개함
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제12조(가명정보를 처리하는 경우 가명정보 처리에 관한 사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              &#60; 에이투아이(주) &#62; 은(는) 다음과 같은 목적으로 가명정보를
              처리하고 있습니다.
              <br />
              <br />▶ 가명정보의 처리 목적
              <br />- 직접작성 가능합니다.
              <br />
              <br />▶ 가명정보의 처리 및 보유기간
              <br />- 직접작성 가능합니다.
              <br />
              <br />▶ 가명정보의 제3자 제공에 관한 사항(해당되는 경우에만 작성)
              <br />- 직접작성 가능합니다.
              <br />
              <br />▶ 가명정보 처리의 위탁에 관한 사항(해당되는 경우에만 작성)
              <br />- 직접작성 가능합니다.
              <br />
              <br />▶ 가명처리하는 개인정보의 항목
              <br />- 직접작성 가능합니다.
              <br />
              <br />▶ 법 제28조의4(가명정보에 대한 안전조치 의무 등)에 따른
              가명정보의 안전성 확보조치에 관한 사항
              <br />- 직접작성 가능합니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제13조 (개인정보 보호책임자에 관한 사항)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① 에이투아이(주) 은(는) 개인정보 처리에 관한 업무를 총괄해서
              책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              <br />
              <br />▶ 개인정보 보호책임자
              <li>성명 :박기태 </li>
              <li>직책 :대표</li>
              <li>직급 :CEO</li>
              <li>
                연락처 :010-5007-0844, ceo.alexpark@a2ikorea.com, 0504-473-0844
              </li>
              ※ 개인정보 보호 담당부서로 연결됩니다.
              <br />
              <br />▶ 개인정보 보호 담당부서
              <li>부서명 :</li>
              <li>담당자 :</li>
              <li>연락처 :</li>② 정보주체께서는 에이투아이(주) 의 서비스(또는
              사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
              불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
              담당부서로 문의하실 수 있습니다. 에이투아이(주) 은(는) 정보주체의
              문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제14조(국내대리인의 지정)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              정보주체는 ｢개인정보 보호법｣ 제39조의11에 따라 지정된 &#60;
              에이투아이(주) &#62;의 국내대리인에게 개인정보 관련 고충처리 등의
              업무를 위하여 연락을 취할 수 있습니다.
              <br />
              &#60; 에이투아이(주) &#62;은(는) 정보주체의 개인정보 관련 고충처리
              등 개인정보 보호책임자의 업무 등을 신속하게 처리할 수 있도록
              노력하겠습니다.
              <br />
              <br />▶ &#60; 에이투아이(주) &#62; 은(는) ｢개인정보 보호법｣
              제39조의11에 따라 국내대리인을 지정하였습니다.
              <br />- 국내대리인의 성명 : [대리인 성명_직접입력] (법인의 경우
              법인명, 대표자의 성명)
              <br />- 국내대리인의 주소 : [대리인 주소_직접입력] (법인의 경우
              영업소 소재지)
              <br />- 국내대리인의 전화번호 : [대리인 전화번호_직접입력]
              <br />- 국내대리인의 전자우편 주소 : [대리인 전자우편_직접입력]
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-2">
              제15조(개인정보의 열람청구를 접수·처리하는 부서)
            </h2>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-md mb-10">
              정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를
              아래의 부서에 할 수 있습니다. &#60; 에이투아이(주) &#62;은(는)
              정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ▶ 개인정보 열람청구 접수·처리 부서 부서명 : InPal플랫폼 운영관리팀
              담당자 : 송홍석 연락처 : 010-2615-4814, hssong@a2ikorea.com,
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제16조(정보주체의 권익침해에 대한 구제방법)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              정보주체는 개인정보침해로 인한 구제를 받기 위하여
              개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
              분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
              개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
              바랍니다.
              <br />
              <br />
              1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
              (www.kopico.go.kr)
              <br />
              <br />
              2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
              <br />
              <br />
              3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
              <br />
              <br />
              4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
              <br />
              <br />
              「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
              정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대
              하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는
              이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
              청구할 수 있습니다.
              <br />※ 행정심판에 대해 자세한 사항은
              중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기
              바랍니다.
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-2">
              제17조(영상정보처리기기 운영·관리에 관한 사항)
            </h2>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-md mb-10">
              {" "}
              ① &#60; 에이투아이(주) &#62;은(는) 아래와 같이 영상정보처리기기를
              설치·운영하고 있습니다.
            </h2>
            <p className="leading-relaxed text-md mb-10">
              1.영상정보처리기기 설치근거·목적 : &#60; 에이투아이(주) &#62;의
              <br />
              <br />
              2.설치 대수, 설치 위치, 촬영 범위 :<li>설치대수 : 대</li>
              <li>설치위치 :</li>
              <li>촬영범위 :</li>
              <br />
              3.관리책임자, 담당부서 및 영상정보에 대한 접근권한자 :
              <br />
              <br />
              4.영상정보 촬영시간, 보관기간, 보관장소, 처리방법 촬영시간 : 시간
              보관기간 : 촬영시부터 보관장소 및 처리방법 :<br />
              <br />
              5.영상정보 확인 방법 및 장소 :<br />
              <br />
              6.정보주체의 영상정보 열람 등 요구에 대한 조치 : 개인영상정보
              열람.존재확인 청구서로 신청하여야 하며, 정보주체 자신이 촬영된
              경우 또는 명백히 정보주체의 생명.신체.재산 이익을 위해 필요한
              경우에 한해 열람을 허용함
              <br />
              <br />
              7.영상정보 보호를 위한 기술적.관리적.물리적 조치 :
            </p>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-10">
              제18조(개인정보 처리방침 변경)
            </h2>
            <p className="leading-relaxed text-md mb-10">
              ① 이 개인정보처리방침은 2023년 4월 1부터 적용됩니다.
              <br />
              <br />② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
              <br />
              예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
              <br />
              예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
              <br />
              예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
            </p>
            {/* <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
