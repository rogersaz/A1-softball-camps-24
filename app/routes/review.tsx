import { Link } from "@remix-run/react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Review() {
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    overallExperience: 'Single',
    drillsAndExercises: 'Single',
    coachingStaff: 'Single',
    instruction: 'Single',
    campSchedule: 'Single',
    breaksAndRest: 'Single',
    valueForCost: 'Single',
    childEnjoyment: 'Single',
    suggestions: '',
    registrationProcess: 'Single',
  });

  const showErrorPopup = () => {
    setIsErrorPopupVisible(true);
  };

  const closeErrorPopup = () => {
    setIsErrorPopupVisible(false);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let scaleValue = 'Single';
    if (value === '1') scaleValue = 'Double';
    if (value === '2') scaleValue = 'Triple';
    if (value === '3') scaleValue = 'Homerun';
    setFormData({ ...formData, [name]: scaleValue });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('reviews')
      .insert([formData]);

    if (error) {
      console.error('Error submitting review:', error);
      showErrorPopup();
    } else {
      console.log('Review submitted successfully:', data);
      setFormData({
        overallExperience: 'Single',
        drillsAndExercises: 'Single',
        coachingStaff: 'Single',
        instruction: 'Single',
        campSchedule: 'Single',
        breaksAndRest: 'Single',
        valueForCost: 'Single',
        childEnjoyment: 'Single',
        suggestions: '',
        registrationProcess: 'Single',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Review Wildcat Summer Softball Camp</title>
        <meta name="description" content="Submit your review for the Wildcat Summer Softball Camp." />
        <meta name="keywords" content="Wildcat Summer Softball Camp, softball camp, reviews, youth sports, softball training" />
        <meta name="author" content="Wildcat Summer Softball Camp" />
      </Helmet>
      <main className="relative min-h-screen bg-blue-900 sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="bg-white bg-opacity-50 p-8 rounded-md">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Review Wildcat Summer Softball Camp
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    We appreciate your feedback! Please take a moment to share your experience at the Wildcat Summer Softball Camp.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {[
                      { label: 'Overall Experience', name: 'overallExperience' },
                      { label: 'Were the drills and exercises challenging and beneficial?', name: 'drillsAndExercises' },
                      { label: 'How would you rate the coaching staff?', name: 'coachingStaff' },
                      { label: 'Did the coaches provide clear and helpful instruction?', name: 'instruction' },
                      { label: 'How well organized was the camp schedule?', name: 'campSchedule' },
                      { label: 'Were there enough breaks and rest periods?', name: 'breaksAndRest' },
                      { label: 'Do you feel the camp provided good value for the cost?', name: 'valueForCost' },
                      { label: 'Did your child enjoy their time at the camp?', name: 'childEnjoyment' },
                      { label: 'How easy was the registration process for the camp?', name: 'registrationProcess' }
                    ].map((question) => (
                      <div key={question.name}>
                        <label
                          htmlFor={question.name}
                          className="block text-base font-bold text-black"  // Increased font size and bold
                        >
                          {question.label}
                        </label>
                        <input
                          type="range"
                          id={question.name}
                          name={question.name}
                          min="0"
                          max="3"
                          step="1"
                          defaultValue="0"
                          onChange={handleSliderChange}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-slider-thumb"
                        />
                        <div className="flex justify-between text-sm mt-2">
                          <span>Single</span>
                          <span>Double</span>
                          <span>Triple</span>
                          <span>Homerun</span>
                        </div>
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="suggestions"
                        className="block text-base font-bold text-black" // Increased font size and bold
                      >
                        Do you have any suggestions for improving the camp in the future?
                      </label>
                      <textarea
                        id="suggestions"
                        name="suggestions"
                        value={formData.suggestions}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Your suggestions here..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                      Submit Review
                    </button>
                  </form>

                  {/* Error Popup */}
                  {isErrorPopupVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="absolute inset-0 bg-black opacity-50" onClick={closeErrorPopup}></div>
                      <div className="bg-white p-8 rounded-md border-2 border-red-600 z-50">
                        <p>There was an issue submitting your review. Please try again.</p>
                        <button onClick={closeErrorPopup} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Close</button>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
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
