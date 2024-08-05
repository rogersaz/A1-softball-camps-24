import { Link } from "@remix-run/react";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function About() {
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
        <title>About Wildcat Summer Softball Camp</title>
        <meta name="description" content="Learn about Wildcat Summer Softball Camp - the mission, what to expect, camp details, and how to register." />
        <meta name="keywords" content="Wildcat Summer Softball Camp, softball camp, youth softball, softball training, Willow Canyon High School" />
        <meta name="author" content="Wildcat Summer Softball Camp" />
      </Helmet>
      <main className="relative min-h-screen bg-blue-900 sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="bg-white bg-opacity-50 p-8 rounded-md">

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

                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    About Wildcat Summer Softball Camp
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    Welcome to the Wildcat Summer Softball Camp! Our camp is designed to provide young athletes with an opportunity to develop their softball skills in a fun and supportive environment. Whether you're a beginner looking to learn the basics or an experienced player aiming to refine your techniques, our camp has something for everyone.
                  </p>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Our Mission
                  </h2>
                  <p className="mt-4 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    At Wildcat Summer Softball Camp, our mission is to inspire and nurture the love of softball in each participant. We strive to create a positive and encouraging atmosphere where players can grow both on and off the field. Our college players are committed to helping each player reach their full potential by focusing on skill development, teamwork, and sportsmanship.
                  </p>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    What to Expect
                  </h2>
                  <ul className="mt-4 max-w-lg mx-auto text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>
                      <strong>Skill Development:</strong> Our experienced college players will provide instruction on all aspects of the game, including hitting, pitching, fielding, and base running. We use drills and game situations to help players improve their skills and gain confidence.
                    </li>
                    <li className="mt-2">
                      <strong>Team Building:</strong> Softball is a team sport, and we emphasize the importance of teamwork and communication. Players will participate in team-building activities and scrimmages to enhance their understanding of the game.
                    </li>
                    <li className="mt-2">
                      <strong>Fun Activities:</strong> While skill development is our focus, we also ensure that our campers have a great time. Our camp includes various fun activities and games to keep the atmosphere light and enjoyable.
                    </li>
                  </ul>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Camp Details
                  </h2>
                  <ul className="mt-4 max-w-lg mx-auto text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>Date: Aug 5, 2024 - 6pm - 9pm</li>
                    <li className="mt-2">Location: Willow Canyon High School</li>
                    <li className="mt-2">Ages: Open to players aged 8-16 years old.</li>
                    <li className="mt-2">Cost: The camp fee is $50 per player.</li>
                  </ul>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Payment Options
                  </h2>
                  <p className="mt-4 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    We offer three different ways to pay for the camp:
                  </p>
                  <ul className="mt-4 max-w-lg mx-auto text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>CASH: Pay when you arrive at the camp.</li>
                    <li className="mt-2">
                      CREDIT CARD or VENMO: Visit our <Link to="/payment" className="text-blue-500 underline">PAYMENT page</Link> to pay with a credit card or Venmo. Please note that each of these options includes a small fee of $3.00.
                    </li>
                  </ul>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Rain Out Date
                  </h2>
                  <p className="mt-4 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    We know it's Surprise, AZ, and we get very little rain, but it is monsoon season. Our rain out date will be Aug 6, 2024, from 6pm - 9pm.
                  </p>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Join us for an unforgettable week of softball, fun, and friendships at Wildcat Summer Softball Camp. We look forward to seeing you on the field!
                  </h2>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Instructors
                  </h2>
                  <ul className="mt-4 max-w-lg mx-auto text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>Trinity Kennemer - South Dakota State</li>
                    <li className="mt-2">A1 - Louisiana Tech University</li>
                    <li className="mt-2">Tristen Turlington - BYU</li>
                    <li className="mt-2">Jaeden Murphy - University of Kansas</li>
                    <li className="mt-2">Marissa McCann - University of Missouri Tigers</li>
                  </ul>
                  <div className="mt-4 flex justify-center">
                    <Link
                      to="/instructors"
                      className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-base font-medium text-white hover:bg-yellow-600 ease-in duration-300"
                    >
                      Meet Our Instructors
                    </Link>
                  </div>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Contact Us
                  </h2>
                  <ul className="mt-4 max-w-lg mx-auto text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>Email: Alannah Rogers <a href="mailto:a1softball12771@gmail.com" className="text-blue-500 underline">a1softball12771@gmail.com</a></li>
                    <li className="mt-2">Location: Willow Canyon High School</li>
                    <li className="mt-2">Website: <a href="https://wildcatssc24.com" className="text-blue-500 underline">wildcatssc24.com</a></li>
                  </ul>

                  <p className="mt-8 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    Follow us on social media for updates and camp highlights!
                  </p>

                  <p className="mt-4 max-w-lg mx-auto text-center text-xl text-black font-bold sm:max-w-3xl">
                    Wildcat Summer Softball Camp – Where Skills and Friendships are Made!
                  </p>

                  <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={showErrorPopup}
                      className="relative inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 ease-in duration-300 w-full sm:w-auto"
                    >
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      </span>
                      Sign Up
                    </button>
                    <Link
                      to="/about"
                      className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-base font-medium text-white hover:bg-green-600 ease-in duration-300 w-full sm:w-auto"
                    >
                      About
                    </Link>
                    <Link
                      to="/instructors"
                      className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-base font-medium text-white hover:bg-yellow-600 ease-in duration-300 w-full sm:w-auto"
                    >
                      Instructors
                    </Link>
                    <Link
                      to="https://www.wildcatssc24.com"
                      className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-blue-600 ease-in duration-300 w-full sm:w-auto"
                    >
                      Home
                    </Link>
                    <Link
                      to="/payment"
                      className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-base font-medium text-white hover:bg-red-600 ease-in duration-300 w-full sm:w-auto"
                    >
                      Pay Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

