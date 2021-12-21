import Button from "../components/button";

const header = () => {
  return (
    <div>
      <div className="lg:pb-3 bg-original-blue ">
        <div className="px-2 md:px-8 pt-2 mx-auto">
          <header
            className="grid grid-cols-12 py-1
          "
          >
            <a
              href="/s"
              className="col-span-4 font-tourney text-2xl md:text-3xl "
              aria-label="logo"
            >
              Syskenknowledge
            </a>
            <div className="relative col-span-4">
              <input
                className="block py-3 px-4 w-full leading-tight text-gray-700 bg-white focus:bg-white rounded-full border border-gray-200 focus:border-gray-500 appearance-none focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder="検索"
              />
              <button className="absolute top-2 right-2">
                <svg
                  className="w-8 h-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>
            <div className="col-start-10">
              <button className="py-2 px-4 font-bold text-black bg-white hover:bg-gray-100 rounded-full">
                スレ立て
              </button>
            </div>

            <div className="col-start-12">
              <button className="py-2 px-4 font-bold text-black bg-white hover:bg-gray-100 rounded-full">
                ログイン
              </button>
            </div>

            <div className="col-start-13">
              <button className="py-2 px-4 font-bold text-black bg-white hover:bg-gray-100 rounded-full">
                登録
              </button>
            </div>

            {/* <a
                href="#"
                className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100"
              >
                Home
              </a>
              <a
                href="#"
                className="inline-flex gap-1 items-center text-lg font-semibold text-indigo-500"
              >
                Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100"
              >
                About
              </a> */}

            {/* <input
              className="px-4 mb-2 w-full h-12 text-lg placeholder-gray-600 text-gray-700 rounded-lg border focus:shadow"
              type="text"
              placeholder="Large input"
            />

            <div className="hidden lg:flex flex-col sm:flex-row gap-2.5 sm:justify-center lg:justify-start -ml-8">
              <a
                href="#"
                className="inline-block py-3 px-4 text-sm md:text-base font-semibold text-center text-gray-500 hover:text-indigo-500 active:text-indigo-600 rounded-lg focus-visible:ring ring-indigo-300 transition duration-100 outline-none"
              >
                Sign in
              </a>

              <a
                href="#"
                className="inline-block py-3 px-8 text-sm md:text-base font-semibold text-center text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-lg focus-visible:ring ring-indigo-300 transition duration-100 outline-none"
              >
                Sign up
              </a>
            </div> */}

            {/* <button
              type="button"
              className="inline-flex lg:hidden gap-2 items-center py-2 px-2.5 text-sm md:text-base font-semibold text-gray-500 active:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg focus-visible:ring ring-indigo-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Menu
            </button> */}
          </header>
        </div>
      </div>
    </div>
  );
};

export default header;
