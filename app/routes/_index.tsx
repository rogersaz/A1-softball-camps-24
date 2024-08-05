import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function Index() {
  const user = useOptionalUser();
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

  const showErrorPopup = () => {
    setIsErrorPopupVisible(true);
  };

  const closeErrorPopup = () => {
    setIsErrorPopupVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Wildcat Summer Softball Camp 2024</title>
        <meta name="description" content="Join Wildcat Summer Softball Camp 2024 - Surprise AZ 2024 the ultimate softball experience! Improve your skills. Sign up now!" />
        <meta name="keywords" content="softball camps, A1 softball, softball training, Surprise AZ., youth softball, sports camps, softball skills, softball clinics" />
        <meta name="author" content="A1 Softball Camps" />
        <meta property="og:title" content="Wildcat Summer Softball Camp 2024" />
        <meta property="og:description" content="Join Wildcat Summer Softball Camp for the ultimate softball experience! Improve your skills. Sign up now!" />
        <meta property="og:image" content="/wildcat-A1-camp.jpg" />
        <meta property="og:url" content="https://www.wildcatssc24.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center bg-white lg:bg-black">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0 hidden lg:block">
                <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
              </div>
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32 bg-black lg:bg-transparent">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-white drop-shadow-md">
                    Wildcat Summer
                  </span>
                  <span className="block uppercase text-white drop-shadow-md">
                    SOFTBALL CAMP
                  </span>
                  <span className="block uppercase text-3xl drop-shadow-md">
                    <span className="block text-blue-200">Join us on</span>
                    <span className="block text-blue-400">Mon Aug 5th 2024</span>
                    <span className="block text-blue-600">from 6pm - 9pm</span>
                  </span>
                </h1>

                <img
                  className="mx-auto mt-6 max-w-lg object-contain sm:max-w-3xl rounded-[10px]"
                  src="/wildcat-A1-camp.jpg"
                  alt="Wildcat Summer Softball Camp 2024"
                />

                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                </p>

                {/* Error Popup */}
                {isErrorPopupVisible && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeErrorPopup}></div>
                    <div className="bg-white p-8 rounded-md border-2 border-red-600 z-50">
                      <p>We are sorry but our Dugout is full.</p>
                      <p>QUESTIONS? EMAIL A1 at <a href="mailto:a1softball12771@gmail.com">a1softball12771@gmail.com</a></p>
                      <button onClick={closeErrorPopup} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Close</button>
                    </div>
                  </div>
                )}

                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center flex-wrap space-y-4 sm:space-y-0 sm:space-x-4">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 w-full sm:w-auto ease-in duration-300"
                    >
                      View Notes for {user.email}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={showErrorPopup}
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 w-full sm:w-auto ease-in duration-300"
                      >
                        <span className="relative flex h-3 w-3 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        Sign up
                      </button>
                      <Link
                        to="/payment"
                        className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600 w-full sm:w-auto ease-in duration-300"
                      >
                        Pay Now
                      </Link>
                      <Link
                        to="/about"
                        className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 text-base font-medium text-white hover:bg-green-600 w-full sm:w-auto ease-in duration-300"
                      >
                        About
                      </Link>
                      <Link
                        to="/instructors"
                        className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 text-base font-medium text-white hover:bg-yellow-600 w-full sm:w-auto ease-in duration-300"
                      >
                        Instructors
                      </Link>
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

