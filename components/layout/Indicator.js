export default function Indicator({ page }) {
  return (
    <div className="fixed w-full bottom-10 left-0">
      <div
        className={`
      container mx-auto flex items-center justify-center text-white text-lg text-right font-bold title-font ${
        page == 6 ? "opacity-0" : "opacity-100"
      }`}
      >
        <h1 className="w-full">0{page}&nbsp;&#47;&nbsp;05</h1>
      </div>
    </div>
  );
}
