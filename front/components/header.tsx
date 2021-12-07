import Button from "../components/button";

const header = () => {
  return (
    <div>
      <div className="lg:pb-3 bg-original-blue">
        <div className="px-4 md:px-8 mx-auto max-w-screen-2xl ">
          <header className="flex justify-between items-center py-4">
            <a
              href="/s"
              className="inline-flex gap-2.5 items-center text-2xl md:text-3xl font-bold "
              aria-label="logo"
            >
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                className="w-6 h-auto text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Flowrift
            </a>

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

            <div className="p-2 m-1 w-48 text-center text-white bg-blue-400">
              1
            </div>
            <div className="p-2 m-1 w-48 text-center text-white bg-blue-400">
              2
            </div>
            <div className="p-2 m-1 w-48 text-center text-white bg-blue-400">
              3
            </div>

            <button
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
            </button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default header;
