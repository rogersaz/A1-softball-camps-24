import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { Link } from "@remix-run/react";
import 'tailwindcss/tailwind.css';

const supabaseUrl = 'https://omhsepwfnkxmzjqvydun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taHNlcHdmbmt4bXpqcXZ5ZHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDEzMzcsImV4cCI6MjAyNzIxNzMzN30.did1LkX1hVTxQs-nQLWxlSNSsL_WSJIV89HKcVPPfC4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ReviewForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data);
    setIsSubmitting(true);
    try {
      const { data: supabaseData, error } = await supabase
        .from('reviews')
        .insert([{ 
          overall_experience: data.overallExperience,
          drills_and_exercises: data.drillsAndExercises,
          coaching_staff: data.coachingStaff,
          instruction: data.instruction,
          camp_schedule: data.campSchedule,
          breaks_and_rest: data.breaksAndRest,
          value_for_cost: data.valueForCost,
          child_enjoyment: data.childEnjoyment,
          registration_process: data.registrationProcess,
          suggestions: data.suggestions,
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Supabase response:', supabaseData);
      alert('Review Submitted Successfully! ⚾ You just hit a grand slam with that feedback! Thanks for helping us make the camp a home run! 🥎');

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error:', error);
      alert(`Error submitting review: 😱 Please try again later. ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/Softball background.jpg')` }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-semibold text-center">
            Wildcat Summer Softball Camp Review
          </h2>
        </div>

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
          <div key={question.name} className="mb-4">
            <label htmlFor={question.name} className="block text-base font-bold text-black mb-2">
              {question.label}
            </label>
            <select
              {...register(question.name, { required: true })}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Triple">Triple</option>
              <option value="Homerun">Homerun</option>
            </select>
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="suggestions" className="block text-base font-bold text-black mb-2">
            Do you have any suggestions for improving the camp in the future?
          </label>
          <textarea
            id="suggestions"
            {...register("suggestions")}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Your suggestions here..."
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors duration-300"
            disabled={isSubmitting}
          >
            Submit Review
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <Link 
            to="https://wildcatssc24.com/"  
            className="flex items-center justify-center rounded-md bg-gray-500 px-4 py-3 font-medium text-white hover:bg-gray-600 transition-colors duration-300"
          >
            HOME
          </Link>
        </div>
      </form>
    </div>
  );
}
