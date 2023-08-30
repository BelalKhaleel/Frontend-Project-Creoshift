import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className=" h-screen" style={{ backgroundColor: "#191919" }}>
        <header className=" p-10" style={{ backgroundColor: "#202020" }}>
          <div className="header-top flex justify-between items-center mb-10">
            <div className="flex w-10 justify-between gap-0.5">
              <div className="bg-white h-1 w-4 rounded"></div>
              <div className="bg-white h-1 w-2 rounded"></div>
              <div className="bg-white h-1 w-1 rounded"></div>
            </div>
            <Image
              src="/icons8-crescent-96.png"
              width={48}
              height={50}
              alt="Icon of the crescent"
            />
          </div>
          <nav className="text-sm" style={{ color: "#5D5D5D" }}>
            <ul className="flex gap-3 justify-center text-tertiary">
              <li className="pb-3 flex-1 relative font-bold">
                Pages
                <div className="absolute bottom-0 w-full h-1 bg-white rounded"></div>
              </li>
              <li
                className="pb-3 flex-1 flex justify-between relative font-bold"
                style={{ color: "#DEDEDE" }}
              >
                Integrations
                <span
                  className=" font-thin flex items-center"
                  style={{ color: "#DEDEDE", fontSize: "10px" }}
                >
                  (5/12)
                </span>
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
                <div className="absolute bottom-0 w-5/12 h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Scalability
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Requirements
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Security
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Others
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Support
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Hosting
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Support
                <div
                  className="absolute bottom-0 w-full h-1 rounded"
                  style={{ backgroundColor: "#5D5D5D" }}
                ></div>
              </li>
            </ul>
          </nav>
        </header>
        <div className="main mt-8 ml-28 mr-12">
          <div className="left-content w-2/4 pt-5">
            <h1 className="text-xl font-bold" style={{ color: "#DEDEDE" }}>
              Select Pages Information
            </h1>
            <p className="mb-16 mt-2" style={{ color: "#7E7E7E" }}>
              Lorem ipsum dolor sit amet consetetur elitr
            </p>
            <h2 className="font-semibold" style={{ color: "#DEDEDE" }}>Total Pages*</h2>
            <div className="flex justify-between">
              <span className="mt-3.5" style={{ color: "#7E7E7E" }}>
                <span className="text-2xl font-semibold" style={{ color: "#DEDEDE" }}>
                  12
                </span>{" "}
                pages
              </span>
              <span className="text-xl" style={{ color: "#DEDEDE" }}>
                + 2,000$
              </span>
            </div>
            <div className="progress-bar relative mt-7 ">
              <div
                className="absolute bottom-0 w-full h-2 rounded"
                style={{ backgroundColor: "#5D5D5D" }}
              ></div>
              <span
                className="w-8 h-8 bg-white absolute rounded-full"
                style={{ left: "26.125rem", bottom: "-0.7rem" }}
              ></span>
              <span
                className="w-5 h-5 bg-black absolute -bottom-1.5 rounded-full z-10"
                style={{ left: "26.5rem" }}
              ></span>
              <div className="absolute bottom-0 w-1/2 h-2 bg-white rounded"></div>
            </div>
            <span className="inline-block mt-6" style={{ color: "#7E7E7E" }}>
              project with more than 30 pages with get a 10% discount
            </span>
            <div className="buttons flex justify-between mt-16">
              <button
                className="back w-24 h-12 rounded-xl text-sm"
                style={{ color: "#DEDEDE", backgroundColor: "#202020" }}
              >
                Back
              </button>
              <button
                className="next-step w-36 h-12 rounded-xl text-base"
                style={{ color: "#0B0B0B", backgroundColor: "#ECECEC" }}
              >
                Next Step
              </button>
            </div>
          </div>
          <div className="right-content "></div>
        </div>
      </div>
    </>
  );
}
