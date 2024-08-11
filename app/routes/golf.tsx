import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import 'tailwindcss/tailwind.css';

const supabaseUrl = 'https://omhsepwfnkxmzjqvydun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taHNlcHdmbmt4bXpqcXZ5ZHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDEzMzcsImV4cCI6MjAyNzIxNzMzN30.did1LkX1hVTxQs-nQLWxlSNSsL_WSJIV89HKcVPPfC4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function GolfSignup() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data);
    setIsSubmitting(true);
    try {
      const { data: supabaseData, error } = await supabase
        .from('Golf-Signup')
        .insert([{ 
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          teamName: data.teamName || null,
          teamMembers: data.teamMembers || null,
          sponsorshipInterest: data.sponsorshipInterest
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Supabase response:', supabaseData);
      alert('Signup Successful! 🏌️‍♂️ Your participation is confirmed. See you at the tournament!');

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error:', error);
      alert(`Error submitting signup: 😱 Oops! Something went wrong. Please try again: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/Golf background.jpg')` }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-semibold text-center">
            Golf Tournament Signup
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block mb-2">Full Name</label>
            <input 
              type="text" 
              {...register("fullName", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your full name" 
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Email Address</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email address" 
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Phone Number</label>
            <input 
              type="text" 
              {...register("phone", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your phone number" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Team Name (if registering as a team)</label>
            <input 
              type="text" 
              {...register("teamName")} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your team name (optional)" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Team Members' Names (MAX 4 Names)</label>
            <input 
              type="text" 
              {...register("teamMembers")} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter team members' names (optional)" 
            />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Sponsorship Interest</h3>
          <label className="block mb-2">Are you interested in sponsorship opportunities?</label>
          <select 
            {...register("sponsorshipInterest", { required: true })} 
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors duration-300"
            disabled={isSubmitting}
          >
            Submit Signup
          </button>
        </div>
      </form>
    </div>
  );
}
