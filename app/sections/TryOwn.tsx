import Image from "next/image";

const TryOwn = () => {
  return (
    <div
      id="download"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-16"
    >
      <div className="max-w-[1450px] mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Try it yourself!
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Download the app and start organizing your belongings today
          </p>
        </div>

        <div className="flex justify-center flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <div className="text-gray-500 font-medium">App Mockup</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Free download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-600">No ads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Cross-device sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOwn;
