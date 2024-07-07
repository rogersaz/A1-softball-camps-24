import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  
  const handleAboutClick = () => {
    alert("What's behind this button? A treasure trove of softball secrets? A portal to a parallel universe where softball is the national sport? Or maybe just a really, really good story about our camp? Well, you'll have to wait to find out! Stay tuned, slugger! 🌟⚾");
  };

  return (
    <>
      <head>
        <title>A1 Softball Camps</title>
        <meta name="description" content="Join A1 Softball Camps for the ultimate softball experience! Improve your skills, have fun, and make new friends. Sign up now!" />
      </head>
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/a1-hitting-softball.jpg"
                  alt="A1 Hitting at LATech 2024"
                />
                <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
              </div>
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-blue-500 drop-shadow-md">
                    a1
                  </span>
                  <span className="block uppercase text-blue-500 drop-shadow-md">
                    LOUISIANA TECH
                  </span>
                  <span className="block uppercase text-blue-500 drop-shadow-md">
                    OF - L/L
                  </span>
                </h1>
        
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                  I'll be playing for the 2024 Bradenton Slice, @a1softball
                  from @LATechSB coming to the @FGCLsoftball
                  this summer season for the Slice & Dice Machine! 
                </p>
         
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                    >
                      View Notes for {user.email}
                    </Link>
                  ) : (
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="https://www.a1softballcamps.com/signup"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/#"
                        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                      >
                        Log In
                      </Link>
                      <button
                        onClick={handleAboutClick}
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                      >
                        About
                      </button>
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
