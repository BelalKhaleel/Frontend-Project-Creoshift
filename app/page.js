import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className=" h-screen" style={{backgroundColor: "#191919"}}>
        <header className=" p-10" style={{backgroundColor: "#202020"}}>
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
          <nav className="text-sm" style={{color: "#5D5D5D"}}>
            <ul className="flex gap-3 justify-center text-tertiary">
              <li className="pb-3 flex-1 relative font-bold">
                Pages
                <div className="absolute bottom-0 w-full h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 flex justify-between relative font-bold" style={{color: "#DEDEDE"}}>
                Integrations
                <span className=" font-thin flex items-center" style={{color: "#DEDEDE", fontSize: "10px"}}>
                  (5/12)
                </span>
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
                <div className="absolute bottom-0 w-5/12 h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Scalability
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Requirements
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Security
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Others
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Support
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Hosting
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
              <li className="pb-3 flex-1 border-tertiary relative font-bold">
                Support
                <div className="absolute bottom-0 w-full h-1 rounded" style={{backgroundColor: "#5D5D5D"}}></div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
