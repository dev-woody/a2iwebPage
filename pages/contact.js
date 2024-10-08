import { useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Seo from "../components/Seo";

export default function Contact() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const onReset = () => {
    setTitle("");
    setMessage("");
  };
  return (
    <div>
      <Seo title="Contact" />
      <Header />
      <section className="text-gray-600 body-font relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.5428371955086!2d127.10023299999999!3d37.2110866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45feaa3deb4f%3A0xac44e7a2a7f49153!2sA2I!5e0!3m2!1sko!2skr!4v1663205672403!5m2!1sko!2skr"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col justify-center it md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              성함과 자세한 문의내용을 입력해주세요.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                성함
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-color text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                문의내용
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-color h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <a
              className="w-full text-white bg-primary-color border-2 border-white py-2 px-6 hover:bg-white hover:border-primary-color hover:border-2 hover:text-primary-color box-border rounded text-lg text-center"
              href={
                "mailto:ceo.alexpark@a2ikorea.com?subject=" +
                `${title}` +
                " 문의&body=" +
                `${message}`
              }
            >
              <button
                className=" border-0 py-2 px-6 focus:outline-none rounded text-lg"
                onClick={onReset}
              >
                문의하기
              </button>
            </a>
            <p className="text-xs text-gray-500 mt-3">
              문의내용에 연락처도 함께 기재해주시면 빠른 답장이 가능합니다.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
