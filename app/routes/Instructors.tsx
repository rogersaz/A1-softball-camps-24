import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { Helmet } from "react-helmet";

export default function Index() {
  const user = useOptionalUser();

  return (
    <>
      <Helmet>
        <title>A1 Softball Camps</title>
        <meta name="description" content="Join The Wildcat Summer Softball Camps for the ultimate softball experience! Improve your skills, have fun, and make new friends. Sign up now!" />
        <meta name="keywords" content="softball camps, A1 softball, Louisiana Tech, softball training, softball clinics, softball skills, sports camps, youth sports, Surprise AZ, Willow Canyon" />
        <meta name="author" content="Wildcat Summer Softball Camps" />
        <meta property="og:title" content="Wildcat Summer Softball Camp 2024" />
        <meta property="og:description" content="Join The Wildcat Summer Softball Camps for the ultimate softball experience! Improve your skills, have fun, and make new friends. Sign up now!" />
        <meta property="og:image" content="/softball-stack.jpg" />
        <meta property="og:url" content="https://www.a1softballcamps.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="relative min-h-screen bg-blue-700 sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="bg-white bg-opacity-50 p-8 rounded-md">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8">
                    <img className="w-full" src="/wildcatssc24-logo.png" alt="Wildcat Summer Softball Camps Logo" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Instructors</div>
                      <p className="text-gray-700 text-base">
                        Meet our highly skilled and experienced instructors dedicated to helping you improve your softball skills.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#softball</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#training</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#skills</span>
                    </div>
                  </div>

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
                  <p className="mx-auto mt-6 max-w-lg text-left text-xl text-black sm:max-w-3xl">
                    Before BYU
                    <ul className="list-disc list-inside">
                      <li>Two-time Arizona 5A state champion</li>
                      <li>MVP of 2021 state championship game</li>
                      <li>Three-time All-Region (2020, 2021 and 2022)</li>
                      <li>Wrestled for a year in high school</li>
                      <li>Top 5% of 2022 graduating class</li>
                      <h2>School Year 2023</h2>
                      <li>All-WCC Second Team</li>
                      <li>WCC Player of the Week (5/8)</li>
                      <li>Batted .345 on the season with 20 hits, 15 RBI, three home runs, three doubles, a triple and a stolen base</li>
                      <li>Posted a .586 slugging percentage and .397 on-base percentage</li>
                      <li>Sent out a trio of home runs in a doubleheader against Pacific, including a grand slam in game one and a walk-off three-run homer in game two (5/5)</li>
                      <li>Played in 25 of the Cougars’ 52 games, starting 19 of them</li>
                      <h2>School Year 2024</h2>
                      <li>Spring Academic All-Big 12 First Team</li>
                      <li>Played in 24 games during the 2024 season, starting nine of them</li>
                      <li>Hit .194 on the year with seven runs scored, six hits and two RBI</li>
                      <li>Went 5-for-5 in stolen bases, finishing with a .226 slugging percentage, .306 on-base percentage and .906 fielding percentage</li>
                    </ul>
                  </p>

                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      Jaeden Murphy <br /> University of Kansas
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
                    Three-time First Team All-Region … Two-time First Team All-Conference … Two-time First Team All-State … Helped lead Willow Canyon to two state championships and three region championships … Finished with a career batting average of .475, second all-time … Produced 156 hits, third all-time … Batted in 138 runners, most all-time
                  </p>

                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                    <span className="block uppercase text-red-500 drop-shadow-md">
                      Marissa McCann <br /> University of Missouri Tigers
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-left text-xl text-black sm:max-w-3xl">
                    SEC Freshman of the Week (4/2/24 & 3/26/24)
                    <br /> 2023-24 SEC First-Year Honor Roll
                    <br /> <strong>PREP</strong>
                    <ul className="list-disc list-inside">
                      <li>2023 PGF All-American</li>
                      <li>2023 Arizona 5A Player of the Year</li>
                      <li>2022 Arizona 5A State Champions and Player of the Game</li>
                      <li>2022 Arizona 5A Player of the Year</li>
                      <li>2022 First Team All-Region</li>
                      <li>2022 Arizona Republic First Team All-State</li>
                      <li>2022 All-West Valley Preps Player of the Year</li>
                      <li>Set school records in wins, ERA, shutouts, strikeouts, complete games, and no-hitter</li>
                      <li>2022 Perfect Game Fall Showcase 18U MVP Pitcher</li>
                      <li>2022 Team PGF Premier 18U Runner Up</li>
                      <li>2021 Arizona 5A State Champions</li>
                      <li>2021 Perfect Game Fall Showcase 18U MVP</li>
                      <li>Member of National Honor Society</li>
                    </ul>
                  </p>
                </div>

                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8 transition duration-150 ease-in-out"
                    >
                      View Notes for {user.email}
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="https://www.wildcatssc24.com/signup"
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8 transition duration-150 ease-in-out"
                      >
                        <span className="relative flex h-3 w-3 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        Sign up
                      </Link>
                      <Link
                        to="/payment"
                        className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600 transition duration-150 ease-in-out"
                      >
                        Pay Now
                      </Link>
                      <Link
                        to="/about"
                        className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 text-base font-medium text-white hover:bg-green-600 transition duration-150 ease-in-out"
                      >
                        About
                      </Link>
                      <Link
                        to="/instructors"
                        className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 text-base font-medium text-white hover:bg-yellow-600 transition duration-150 ease-in-out"
                      >
                        Instructors
                      </Link>
                    </>
                  )}
                  <Link
                    to="https://www.wildcatssc24.com"
                    className="flex items-center justify-center rounded-md bg-purple-500 px-4 py-3 text-base font-medium text-white hover:bg-purple-600 transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

