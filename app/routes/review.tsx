import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
const ReviewPage = () => {
  const [formData, setFormData] = useState({
    overallExperience: "",
    drillsAndExercises: "",
    coachingStaff: "",
    instruction: "",
    campSchedule: "",
    breaksAndRest: "",
    valueForCost: "",
    childEnjoyment: "",
    suggestions: "",
    registrationProcess: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("reviews")
      .insert([formData]);

    if (error) {
      console.error("Error submitting review:", error);
    } else {
      console.log("Review submitted successfully:", data);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Wildcat Summer Softball Camp Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="overallExperience">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="drillsAndExercises">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="coachingStaff">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="instruction">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="campSchedule">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="breaksAndRest">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="valueForCost">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="childEnjoyment">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="suggestions">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="registrationProcess">
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
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
