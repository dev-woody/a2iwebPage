import AboutUs from "../components/pages/\bAboutUs";
import History from "../components/pages/History";
import Members from "../components/pages/Members";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div classNameName="w-full, h-screen">
      <Seo title="About" />
      <AboutUs />
      <History />
      <Members />
    </div>
  );
}
