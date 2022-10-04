import AboutUs from "../components/pages/AboutUs";
import AboutDetail from "../components/pages/AboutDetail";
import History from "../components/pages/History";
import Members from "../components/pages/Members";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      <Seo title="About" />
      <AboutUs />
      <AboutDetail />
      <History />
      <Members />
    </div>
  );
}
