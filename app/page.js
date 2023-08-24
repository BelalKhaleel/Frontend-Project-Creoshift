export default function Page() {
  return (
    <>
      <div className="bg-gray-900 h-screen">
        <header className="bg-gray-800 p-10">
          <nav className="text-white">
            <ul className="flex gap-3 justify-center text-gray-600">
              <li className="pb-3 flex-1 relative font-bold">
                Pages
                <div class="absolute bottom-0 w-full h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 flex justify-between text-white relative font-bold">
                Integrations<span className="text-xs font-thin flex items-center">(5/12)</span>
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
                <div class="absolute bottom-0 w-5/12 h-1 bg-white rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Scalability
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Requirements
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Security
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Others
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Support
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Hosting
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
              <li className="pb-3 flex-1 border-gray-600 relative font-bold">
                Support
                <div class="absolute bottom-0 w-full h-1 bg-gray-600 rounded"></div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
