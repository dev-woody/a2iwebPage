import ThreeCanvas from "./ThreeCanvas";

const Planet = ({ src, main, sub, className }) => {
  return (
    <div
      className={"2xl:w-52 2xl:h-52 w-40 h-40 absolute " + className}
      style={{ top: "35%" }}
    >
      <img
        src="blurCercle.png"
        className="absolute left-0 z-50 2xl:w-52"
        style={{ opacity: "0.5", filter: "blur(3px)" }}
      />
      <div className="absolute top-0 left-0 2xl:w-52 2xl:h-52 w-40 h-40 text-white z-50">
        <div className="flex flex-col justify-center items-center 2xl:h-52 h-40">
          <img src={src} className="2xl:w-20 w-10 mb-2" />
          <h1 className="text-xl">{main}</h1>
          <h1 className="text-sm">{sub}</h1>
        </div>
      </div>
    </div>
  );
};

export default function Section04() {
  return (
    <section className="section04 relative container max-h-screen h-screen mx-auto flex px-5 py-24 justify-between items-center flex-col">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white place-items-start">
        라이브 스타일 플랫폼,
      </h1>
      <Planet
        src="futuristic.png"
        main="Futuristic"
        sub="[미래지향적인]"
        className="Futuristic"
      />
      <Planet
        src="personalized.png"
        main="Personalized"
        sub="[개인맞춤의]"
        className="Personalized"
      />
      <Planet
        src="convenient.png"
        main="Convenient"
        sub="[편리한]"
        className="Convenient"
      />
      <Planet
        src="connecting.png"
        main="Connecting"
        sub="[연결하는]"
        className="Connecting"
      />
      <div className="bg-black mb-4 rounded-full lg:w-4/5 w-full h-4/5 overflow-hidden">
        <ThreeCanvas />
      </div>
      <div className="text-center lg:w-2/3 w-full flex flex-col justify-center items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          의식주를 아우르다.
        </h1>
        <p className="mb-8 leading-relaxed text-white ">
          에이투아이는 인공지능 솔루션을 기반으로
          <br />
          고객이 원하는 사회문화 기술을 구현한다는 비전을 가지고 설립되었습니다.
        </p>
        <img src="deco.png" style={{ width: "0px" }} className="P4gauge" />
      </div>
    </section>
  );
}
