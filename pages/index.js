import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import SectionLast from "../components/pages/SectionLast";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <Section01 />
      <Section02 />
      <Section03 />
      <SectionLast />
    </div>
  );
}

// export async function getServerSideProps() {}
