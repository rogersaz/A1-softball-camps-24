import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Review() {
  const user = useOptionalUser();
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    overallExperience: '',
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
    } else {
      console.log('Review submitted successfully:', data);
      setFormData({
        overallExperience: '',
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
        <title>Wildcat Summer Softball Camp Review</title>
        <meta name="description" content="Submit your review for the Wildcat Summer Softball Camp." />
        <meta name="keywords" content="softball camps, softball training, reviews, youth sports" />
        <meta name="author" content="A1 Softball Camps" />
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
                    SOFTBALL CAMP REVIEW
                  </span>
                </h1>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="overallExperience" className="block text-sm font-medium text-white">
                      Overall Experience
                    </label>
                    <input
                      type="text"
                      id="overallExperience"
                      name="overallExperience"
                      value={formData.overallExperience}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="drillsAndExercises" className="block text-sm font-medium text-white">
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
                    <label htmlFor="coachingStaff" className="block text-sm font-medium text-white">
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
                    <label htmlFor="instruction" className="block text-sm font-medium text-white">
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
                    <label htmlFor="campSchedule" className="block text-sm font-medium text-white">
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
                    <label htmlFor="breaksAndRest" className="block text-sm font-medium text-white">
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
                    <label htmlFor="valueForCost" className="block text-sm font-medium text-white">
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
                    <label htmlFor="childEnjoyment" className="block text-sm font-medium text-white">
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
                    <label htmlFor="suggestions" className="block text-sm font-medium text-white">
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
                    <label htmlFor="registrationProcess" className="block text-sm font-medium text-white">
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

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
