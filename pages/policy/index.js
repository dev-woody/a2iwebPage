import Seo from "../../components/Seo";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useState } from "react";
import Link from "next/link";

export default function Policy() {
  const [page, setPage] = useState("");
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Seo title="Policy" />
      <Header />
      <div className="flex flex-col text-center w-full mt-12 mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          약관 및 정책
        </h1>
      </div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="">
              <a className="mr-5 hover:text-gray-900">이용약관</a>
            </Link>
            <Link href="/policy/collect">
              <a className="mr-5 hover:text-gray-900">개인정보 처리방침</a>
            </Link>
            {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
        </div>
      </header>
      <Footer />
    </div>
  );
}
