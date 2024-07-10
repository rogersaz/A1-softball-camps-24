import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { Helmet } from "react-helmet"; // Import Helmet if not already

export default function Index() {
  const user = useOptionalUser();
  
  const handleAboutClick = () => {
    alert("What's behind this button? A treasure trove of softball secrets? A portal to a parallel universe where softball is the national sport? Or maybe just a really, really good story about our camp? Well, you'll have to wait to find out! Stay tuned, slugger! 🌟⚾");
  };

  const handlePayNowClick = () => {
    alert("Buy Now? Oh, you're eager! Unfortunately, this feature is not available yet. Stay tuned for exciting updates! 💸");
  };

  const handleInstructionsClick = () => {
    alert("Instructors? They're on the way! Stay tuned! 📝😜");
  };

  return (
    <>
      <Helmet>
        <title>A1 Softball Camps</title>
        <meta name="description" content="Join A1 Softball Camps for the ultimate softball experience! Improve your skills, have fun, and make new friends. Sign up now!" />
      </Helmet>
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/softball-stack.jpg"
                  alt="Girls Softball Camp 2024 - Surprise AZ"
                />
                <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
              </div>
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="bg-white bg-opacity-50 p-8 rounded-md">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      A1 <br /> Louisiana Tech University
                    </span>
                  </h1>

                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    2024 (SOPHOMORE): Appeared in 50 games while starting 48 games primarily in right field … Batted .278 with 42 hits, nine doubles, one home run and 23 RBI … Posted a .986 fielding percentage with 55 putouts, two assists and one error … Ended season on a four-game hitting streak and six-game reached-base streak … Tied for the team-lead with seven multi-RBI games … Registered 10 multi-hit games which ranked fourth on the team … Drove in a career-high four RBI and hit her first collegiate home run with a three-run shot in the bottom of the third inning in a 5-3 win over UL-Lafayette (March 20), the Bulldogs first over the Ragin' Cajuns since April 25, 1998 … Went 2-3 with three RBI and three walks during a 28-2 win over Lindenwood (Feb. 17) … Drove in three runs while going 3-7 in a 5-3 loss at Ole Miss (4/16) … Recorded outfield assists against Sam Houston (March 9) and FIU (May 3) … Recorded a season-high three hits on three separate occasions (Missouri State Feb. 24, Illinois March 2, Ole Miss April 16) … Recorded first career stolen base during a 5-1 win over Sam Houston (3/9) … Helped LA Tech clinch a series victory at Jax State after going 2-4 with a run scored in a 8-3 series finale win (April 14)
                  </p>

                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      Trinity Kennemer <br /> South Dakota State
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    A multiple year standout for a two-time state championship softball team at Willow Canyon High School … ended prep career with a .510 batting average across 86 games played … also hit 27 home runs, 42 doubles, eight triples and scored 124 runs … had a nearly perfect fielding percentage of .993 with 278 total chances by making just two errors in three years … set program record in home runs … was selected and participated in summer of 2023 to Fourth of July Future Stars Tournament hosted by TC Colorado Sports … picked to the 2023 All-Arizona High School Softball team … a member of Willow Canyon 2023 team named a Top 10 softball team in country by USA Today Sports (ranked eighth) … fell in state title game as a senior with Willow Canyon, finishing 30-2-1 in 2023 … as a senior hit .542 with a career-high 11 home runs and 60 runs scored as a team captain … finished season among top five individuals in runs scored among all class levels; finished in top 10 in Class 5A in four offensive categories … was her conference’s Defensive Player of the Year in 2022 … that season hit over .500 with nine home runs and 47 RBIs … selected to the All-West Valley Preps First Team and was highlighted on the AZ Central Top Performers List … a three-time all-conference performer and multlipe-time all-region and all-district selection … a PGF All-American Regional Finalist in 2022 … The No. 57 recruit on the class of 2023 Extra Innings Elite 100 list … plans to study athletic training at South Dakota State University.
                  </p>

                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      Tristen Turlington <br /> BYU
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    Two-time Arizona 5A state champion ... MVP of 2021 state championship game ... Three-time All-Region (2020, 2021 and 2022) ... Wrestled for a year in high school ... Top 5% of 2022 graduating class
                  </p>

                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      Jaeden Murphy <br /> University of Kansas
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    Three-time First Team All-Region … Two-time First Team All-Conference … Two-time First Team All-State … Helped lead Willow Canyon to two state championships and three region championships … Finished with a career batting average of .475, second all-time … Produced 156 hits, third all-time … Batted in 138 runners, most all-time
                  </p>
                </div>

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
                      <button
                        onClick={handleInstructionsClick}
                        className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 text-base font-medium text-white hover:bg-yellow-600"
                      >
                        Instructors
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
