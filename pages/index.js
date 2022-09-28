import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import Section04 from "../components/pages/Section04";
import Section05 from "../components/pages/Section05";
import SectionLast from "../components/pages/SectionLast";
import Seo from "../components/Seo";

import Animation from "../components/Animation";
import Cercle from "../components/Cercle";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <div className="fxied top-0 left-0 z-0">
        <div className=" fixed lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden right-0">
          <Animation />
        </div>
      </div>
      <div className="h-screen bg-black snap-mandatory snap-y overflow-y-scroll z-10">
        {/* <Cercle />
      <Cercle />
      <div className=" fixed lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden right-0">
        <Animation />
      </div> */}
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <SectionLast />
      </div>
    </div>
  );
}

// export async function getServerSideProps() {}
