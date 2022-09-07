import Hestory from "../components/pages/Hestory";
import Members from "../components/pages/Members";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div classNameName="w-full, h-screen">
      <Seo title="About" />
      <Hestory />
      <Members />
    </div>
  );
}
