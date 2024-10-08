export default function Section03() {
  return (
    <section className="section03 max-h-screen h-screen container mx-auto flex px-5 py-24 items-center lg:justify-between justify-center flex-col overflow-hidden z-30">
      <img src="cube2D.svg" alt="cube" className="cubeImg mb-20" />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Get Ready Custom.
        </h1>
        <p className="mb-8 leading-relaxed text-white">[ 맞춤 준비하세요. ]</p>
        <div className="flex justify-center">
          <img src="deco.png" style={{ width: "0px" }} className="P3gauge" />
        </div>
      </div>
      <img src="plane.svg" alt="plane" className="planeCtrl" />
    </section>
  );
}
