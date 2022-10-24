import AboutUs from "../components/pages/AboutUs";
import AboutDetail from "../components/pages/AboutDetail";
import History from "../components/pages/History";
import Members from "../components/pages/Members";
import Seo from "../components/Seo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Seo title="About" />
      <Header />
      <AboutUs />
      <AboutDetail />
      <History />
      <Members />
      <Footer />
    </div>
  );
}
