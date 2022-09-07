import Section01 from "../components/pages/Section01";
import Section02 from "../components/pages/Section02";
import Section03 from "../components/pages/Section03";
import SectionLast from "../components/pages/SectionLast";
import Seo from "../components/Seo";

import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  function onScroll() {
    window.scrollTo({
      top: (page - 1) * window.innerHeight,
      behavior: "smooth",
    });
    console.log(page);
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener(
        "wheel",
        function (e) {
          e.preventDefault();
          if (e.deltaY > 0) {
            if (page == 5) return;
            setPage(page + 1);
          } else if (e.deltaY < 0) {
            if (page == 1) return;
            setPage(page - 1);
          }
        },
        { passive: false }
      );
      onScroll();
      return () => {
        removeEventListener("wheel");
      };
    }, 500);
  }, [onScroll]);
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
