import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { Helmet } from "react-helmet";

export default function Index() {
  const user = useOptionalUser();

  const handleAboutClick = () => {
    alert("What's behind this button? A treasure trove of softball secrets? A portal to a parallel universe where softball is the national sport? Or maybe just a really, really good story about our camp? Well, you'll have to wait to find out! Stay tuned, slugger! 🌟⚾");
  };

  const handlePayNowClick = () => {
    alert("Buy Now? Oh, you're eager! Unfortunately, this feature is not available yet. Stay tuned for exciting updates! 💸");
  };

  return (
    <>
      <Helmet>
        <title>Wildcat Summer Softball Camp 2024</title>
        <meta name="description" content="Join A1 and friends for Wildcat Summer Softball Camp 2024 - Surprise AZ 2024 the ultimate softball experience! Improve your skills. Sign up now!" />
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
                    <span className="block text-blue-600">from 7pm - 9pm</span>
                  </span>
                </h1>

                <img
                  className="mx-auto mt-6 max-w-lg object-contain sm:max-w-3xl"
                  src="/wildcat-A1-camp.jpg"
                  alt="Wildcat Summer Softball Camp 2024"
                />

                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                </p>

                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center space-x-4">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                    >
                      View Notes for {user.email}
                    </Link>
                  ) : (
                    <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                      <Link
                        to="https://www.a1softballcamps.com/signup"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <button
                        onClick={handlePayNowClick}
                        className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
                      >
                        Pay Now
                      </button>
                      <button
                        onClick={handleAboutClick}
                        className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 text-base font-medium text-white hover:bg-green-600"
                      >
                        About
                      </button>
                      <Link
                        to="/instructors"
                        className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 text-base font-medium text-white hover:bg-yellow-600"
                      >
                        Instructors
                      </Link>
                    </div>
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
