"use client";

import "./page.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [sliderValue, setSliderValue] = useState(12);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  };

  return (
    <>
      <div className="min-h-screen bg-[#191919] font-[Gellix]">
        <header className=" p-10 pt-5 bg-[#202020]">
          <div className="header-container container mx-auto">
            <div className="header-top flex justify-between items-center mb-10">
              <Link href="/">
                <div className="flex w-10 justify-between gap-0.5">
                  <div className="bg-white h-1 w-4 rounded"></div>
                  <div className="bg-white h-1 w-2 rounded"></div>
                  <div className="bg-white h-1 w-1 rounded"></div>
                </div>
              </Link>
              <Link href="#">
                <Image
                  src="/icons8-crescent-96.png"
                  width={48}
                  height={50}
                  alt="Icon of the crescent"
                />
              </Link>
            </div>
            <nav className="text-sm text-[#5D5D5D]">
              <ul className="flex gap-3 justify-center text-tertiary">
                <Link href="#" className="pb-3 flex-1 relative font-bold">
                  Pages
                  <div className="absolute bottom-0 w-full h-1 bg-white rounded"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 flex justify-between relative font-bold text-[#DEDEDE]"
                >
                  Integrations
                  <span className=" font-thin flex items-center text-[#DEDEDE] text-xs">
                    (5/12)
                  </span>
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                  <div className="absolute bottom-0 w-5/12 h-1 bg-white rounded"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Scalability
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Requirements
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Security
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Others
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Support
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Hosting
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
                <Link
                  href="#"
                  className="pb-3 flex-1 border-tertiary relative font-bold"
                >
                  Support
                  <div className="absolute bottom-0 w-full h-1 rounded bg-[#5D5D5D]"></div>
                </Link>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-8 flex justify-around">
          <div className="left-content w-2/4 pt-5">
            <h1 className="text-xl font-bold text-[#DEDEDE]">
              Select Pages Information
            </h1>
            <p className="mb-16 mt-2 text-[#7E7E7E]">
              Lorem ipsum dolor sit amet consetetur elitr
            </p>
            <h2 className="font-semibold text-[#DEDEDE]">Total Pages*</h2>
            <div className="flex justify-between">
              <span className="mt-3.5 text-[#7E7E7E]">
                <span className="text-2xl font-semibold text-[#DEDEDE]">
                  {sliderValue}
                </span>{" "}
                pages
              </span>
              <span className="text-xl text-[#DEDEDE]">
                + {sliderValue * 1000}$
              </span>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="24"
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full"
              />
            </div>
            <span className="inline-block mt-6 text-[#7E7E7E]">
              project with more than 30 pages with get a 10% discount
            </span>
            <div className="buttons flex justify-between mt-16">
              <button className="back w-24 h-12 rounded-xl text-sm text-[#DEDEDE] bg-[#202020]">
                Back
              </button>
              <button className="next-step w-36 h-12 rounded-xl text-base text-[#0B0B0B] bg-[#ECECEC]">
                Next Step
              </button>
            </div>
          </div>
          <div className="right-content w-[480px] bg-[#3B3B3B] text-[#DEDEDE] rounded-[20px] flex flex-col items-center mb-14">
            <div className="bg-[#191919] w-[448px] h-[60px] flex justify-between items-center p-6 rounded-t-3xl mt-4">
              <span className="text-base font-semibold">Pages</span>
              <span className="text-lg">+ $2,000</span>
            </div>
            <div className="m-4 mt-0 w-[448px] bg-[#292929] rounded-b-3xl text-sm">
              <div className="flex justify-between items-center p-6 relative h-[53px]">
                <span>Total Pages</span>
                <span className="font-semibold">x 10 + $2,000</span>
                <div className="border-[#3B3B3B] border-b-2 absolute bottom-0 w-[400px]"></div>
              </div>
              <div className="flex justify-between items-center p-6 relative h-[53px]">
                <span>Unique Design Pages</span>
                <span className="font-semibold">x 11 + $2,000</span>
                <div className="border-[#3B3B3B] border-b-2 absolute bottom-0 w-[400px]"></div>
              </div>
              <div className="flex justify-between items-center p-6 relative h-[53px]">
                <span>Complexity of Design</span>
                <span className="font-semibold">Basic + $2,000</span>
                <div className="border-[#3B3B3B] border-b-2 absolute bottom-0 w-[400px]"></div>
              </div>
              <div className="flex justify-between items-center p-6 h-[53px]">
                <span>New or Unique User Navigation</span>
                <span className="font-semibold">x 10 + $2,000</span>
              </div>
              <div className="bg-[#191919] h-14 flex justify-between items-center p-6 relative">
                <span className="text-base font-semibold">Integrations</span>
                <span className="text-lg">+ $2,000</span>
              </div>
              <div className="flex justify-between items-center p-6 relative h-[53px]">
                <span>Total Pages</span>
                <span className="font-semibold">x 10 + $2,000</span>
                <div className="border-[#3B3B3B] border-b-2 absolute bottom-0 w-[400px]"></div>
              </div>
              <div className="flex justify-between items-center p-6 relative h-[53px] rounded-b-3xl mb-4 rounded-3xl">
                <span>Unique Design Pages</span>
                <span className="font-semibold">x 11 + $2,000</span>
                <div className="border-[#3B3B3B] border-b-2 absolute bottom-0 w-[400px]"></div>
              </div>
            </div>
            <div className="bg-[#292929] w-full flex mt-auto rounded-b-[20px]">
              <div className="flex justify-around items-center mx-auto w-44 mw-[289px] relative">
                <div className="precision flex flex-col ">
                  <span className="text-xs">Precision</span>
                  <span className="text-base font-semibold">49%</span>
                </div>
                <span className="dot text-4xl absolute bottom-8 mr-4">.</span>
                <div className="yearly-cost flex flex-col">
                  <span className="text-xs">Yearly Cost</span>
                  <span className="text-base font-semibold">$1,250</span>
                </div>
              </div>
              <div className="total-estimate flex bg-[#ECECEC] text-[#0B0B0B] flex-col justify-center items-center w-52 h-20 rounded-3xl rounded-br-[20px] ml-auto">
                <span className="text-xs">Total Estimate Cost</span>
                <span className="text-xl font-bold">$4,625.00</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
