import { useState } from "react";
import Seo from "../components/Seo";

export default function Connect() {
  const [title, setTitle] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [body, setBody] = useState("");
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
      <Seo title="connect" />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            문의하고 싶으신 내용을 입력해주세요.
          </p>
        </div>
        <div className="lg:w-3/4 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  성함
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-color focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="phoneNb"
                  className="leading-7 text-sm text-gray-600"
                >
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phoneNb"
                  name="phoneNb"
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-color focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  문의내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-color focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-primary-color border-0 py-2 px-8 focus:outline-none hover:bg-secondary-color rounded text-lg duration-300">
                <a
                  href={
                    "mailto:ceo.alexpark@a2ikorea.com?body=" +
                    `${body}` +
                    "연락처:" +
                    `${phoneNum}` +
                    "&subject=" +
                    `${title}` +
                    "문의"
                  }
                >
                  연락하기
                </a>
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                className="text-primary-color"
                href={
                  "mailto:ceo.alexpark@a2ikorea.com?body=" +
                  `${body}` +
                  "연락처:" +
                  `${phoneNum}` +
                  "&subject=" +
                  `${title}` +
                  "문의"
                }
              >
                ceo.alexpark@a2ikorea.com
              </a>
              <p className="leading-normal my-5">
                동탄대로 646-4
                <br />
                메가비즈타워 B동 1203호
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
