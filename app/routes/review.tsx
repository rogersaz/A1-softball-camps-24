import { Link } from "@remix-run/react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Review() {
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    overallExperience: 'Single', // Default to 'Single'
    drillsAndExercises: '',
    coachingStaff: '',
    instruction: '',
    campSchedule: '',
    breaksAndRest: '',
    valueForCost: '',
    childEnjoyment: '',
    suggestions: '',
    registrationProcess: '',
  });

  const showErrorPopup = () => {
    setIsErrorPopupVisible(true);
  };

  const closeErrorPopup = () => {
    setIsErrorPopupVisible(false);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let overallExperience = 'Single';
    if (value === '1') overallExperience = 'Double';
    if (value === '2') overallExperience = 'Triple';
    if (value === '3') overallExperience = 'Homerun';
    setFormData({ ...formData, overallExperience });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        drillsAndExercises: '',
        coachingStaff: '',
        instruction: '',
        campSchedule: '',
        breaksAndRest: '',
        valueForCost: '',
        childEnjoyment: '',
        suggestions: '',
        registrationProcess: '',
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
                    <div>
                      <label htmlFor="overallExperience" className="block text-sm font-medium text-black">
                        Overall Experience
                      </label>
                      <input
                        type="range"
                        id="overallExperience"
                        name="overallExperience"
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

                    <div>
                      <label htmlFor="drillsAndExercises" className="block text-sm font-medium text-black">
                        Were the drills and exercises challenging and beneficial?
                      </label>
                      <input
                        type="text"
                        id="drillsAndExercises"
                        name="drillsAndExercises"
                        value={formData.drillsAndExercises}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="coachingStaff" className="block text-sm font-medium text-black">
                        How would you rate the coaching staff?
                      </label>
                      <input
                        type="text"
                        id="coachingStaff"
                        name="coachingStaff"
                        value={formData.coachingStaff}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="instruction" className="block text-sm font-medium text-black">
                        Did the coaches provide clear and helpful instruction?
                      </label>
                      <input
                        type="text"
                        id="instruction"
                        name="instruction"
                        value={formData.instruction}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="campSchedule" className="block text-sm font-medium text-black">
                        How well organized was the camp schedule?
                      </label>
                      <input
                        type="text"
                        id="campSchedule"
                        name="campSchedule"
                        value={formData.campSchedule}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="breaksAndRest" className="block text-sm font-medium text-black">
                        Were there enough breaks and rest periods?
                      </label>
                      <input
                        type="text"
                        id="breaksAndRest"
                        name="breaksAndRest"
                        value={formData.breaksAndRest}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="valueForCost" className="block text-sm font-medium text-black">
                        Do you feel the camp provided good value for the cost?
                      </label>
                      <input
                        type="text"
                        id="valueForCost"
                        name="valueForCost"
                        value={formData.valueForCost}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="childEnjoyment" className="block text-sm font-medium text-black">
                        Did your child enjoy their time at the camp?
                      </label>
                      <input
                        type="text"
                        id="childEnjoyment"
                        name="childEnjoyment"
                        value={formData.childEnjoyment}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="suggestions" className="block text-sm font-medium text-black">
                        Do you have any suggestions for improving the camp in the future?
                      </label>
                      <textarea
                        id="suggestions"
                        name="suggestions"
                        value={formData.suggestions}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="registrationProcess" className="block text-sm font-medium text-black">
                        How easy was the registration process for the camp?
                      </label>
                      <input
                        type="text"
                        id="registrationProcess"
                        name="registrationProcess"
                        value={formData.registrationProcess}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
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
