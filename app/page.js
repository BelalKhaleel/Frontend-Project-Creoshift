import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-gray-900 h-screen">
        <header className="bg-gray-800 p-10">
          <div className="header-top flex justify-between items-center mb-10">
            <div className="relative">
              <div className="w-11 h-1 bg-white rounded">
                <span className="spot middle-spot absolute w-1.5 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2"></span>
                <span className="spot three-fourth-spot absolute w-1.5 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-3/4"></span>
              </div>
            </div>
            <Image
              src="/icons8-crescent-96.png"
              width={50}
              height={50}
              alt="Icon of the crescent"
            />
          </div>
          <nav className="text-white">
            <ul className="flex gap-3 justify-center text-gray-600">
              <li className="pb-3 flex-1 relative font-bold">
                Pages
                <div className="absolute bottom-0 w-full h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 flex justify-between text-white relative font-bold">
                Integrations
                <span className="text-xs font-thin flex items-center">
                  (5/12)
                </span>
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
                <div className="absolute bottom-0 w-5/12 h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Scalability
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Requirements
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Security
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Others
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Support
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Hosting
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Support
                <div className="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
