import { Link } from "@remix-run/react";
import { Helmet } from "react-helmet"; // Import Helmet if not already

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Wildcat Summer Softball Camp</title>
        <meta name="description" content="Learn about Wildcat Summer Softball Camp - the mission, what to expect, camp details, and how to register." />
        <meta name="keywords" content="Wildcat Summer Softball Camp, softball camp, youth softball, softball training, Willow Canyon High School" />
        <meta name="author" content="Wildcat Summer Softball Camp" />
      </Helmet>
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/path-to-your-image.jpg"
                  alt="Wildcat Summer Softball Camp"
                />
                <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
              </div>
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="bg-white bg-opacity-50 p-8 rounded-md">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      About Wildcat Summer Softball Camp
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    Welcome to the Wildcat Summer Softball Camp! Our camp is designed to provide young athletes with an opportunity to develop their softball skills in a fun and supportive environment. Whether you're a beginner looking to learn the basics or an experienced player aiming to refine your techniques, our camp has something for everyone.
                  </p>
                  
                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Our Mission
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    At Wildcat Summer Softball Camp, our mission is to inspire and nurture the love of softball in each participant. We strive to create a positive and encouraging atmosphere where players can grow both on and off the field. Our dedicated coaching staff is committed to helping each player reach their full potential by focusing on skill development, teamwork, and sportsmanship.
                  </p>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    What to Expect
                  </h2>
                  <ul className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>
                      <strong>Skill Development:</strong> Our experienced coaches will provide instruction on all aspects of the game, including hitting, pitching, fielding, and base running. We use drills and game situations to help players improve their skills and gain confidence.
                    </li>
                    <li className="mt-2">
                      <strong>Team Building:</strong> Softball is a team sport, and we emphasize the importance of teamwork and communication. Campers will participate in team-building activities and scrimmages to enhance their understanding of the game.
                    </li>
                    <li className="mt-2">
                      <strong>Fun Activities:</strong> While skill development is our focus, we also ensure that our campers have a great time. Our camp includes various fun activities and games to keep the atmosphere light and enjoyable.
                    </li>
                  </ul>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Camp Details
                  </h2>
                  <ul className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>Date: Aug 5, 2024 - 7pm - 9pm</li>
                    <li className="mt-2">Location: Willow Canyon High School</li>
                    <li className="mt-2">Ages: Open to players aged 8-16 years old.</li>
                    <li className="mt-2">Cost: The camp fee is $50 per player.</li>
                  </ul>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    How to Register
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    To register for the Wildcat Summer Softball Camp, please visit our registration page and complete the online form. Early registration is encouraged as spots are limited. If you have any questions or need additional information, please contact us at <a href="mailto:a1softball12771@gmail.com" className="text-blue-500 underline">a1softball12771@gmail.com</a>.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      to="https://www.a1softballcamps.com/signup"
                      className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-blue-600"
                    >
                      Register Now
                    </Link>
                  </div>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Join us for an unforgettable week of softball, fun, and friendships at Wildcat Summer Softball Camp. We look forward to seeing you on the field!
                  </h2>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Contact Us
                  </h2>
                  <ul className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>Email: Alannah Rogers <a href="mailto:a1softball12771@gmail.com" className="text-blue-500 underline">a1softball12771@gmail.com</a></li>
                    <li className="mt-2">Location: Willow Canyon High School</li>
                    <li className="mt-2">Website: <a href="https://wildcatssc24.com" className="text-blue-500 underline">wildcatssc24.com</a></li>
                  </ul>

                  <p className="mx-auto mt-8 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    Follow us on social media for updates and camp highlights!
                  </p>

                  <p className="mx-auto mt-4 max-w-lg text-center text-xl text-black font-bold sm:max-w-3xl">
                    Wildcat Summer Softball Camp – Where Skills and Friendships are Made!
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Link to="/" className="text-blue-500 underline">
                      Back to Home
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
