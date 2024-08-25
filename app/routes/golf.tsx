import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import 'tailwindcss/tailwind.css';
import '../styles/pencil.css'; // Ensure the correct path to the CSS file

const supabaseUrl = 'https://omhsepwfnkxmzjqvydun.supabase.co';
const supabaseKey = 'your_supabase_key';
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
          teamMember1: data.teamMember1 || null,
          teamMember2: data.teamMember2 || null,
          teamMember3: data.teamMember3 || null,
          teamMember4: data.teamMember4 || null,
          sponsorshipInterest: data.sponsorshipInterest
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Supabase response:', supabaseData);
      alert('Signup Successful! ⛳️ Congratulations, you’ve just teed off in style! We’re ready to hit the greens, and you’re officially in the game. See you on the fairway! 🏌️‍♂️');

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error:', error);
      alert(`Error submitting signup: 😱 Oops! Looks like your ball landed in the bunker. Please check your form and try again. We'll get you back on the green! 🌱: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const ideaForm = new IdeaForm("#idea");
  }, []);

  return (
    <div 
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/Golf background.jpg')` }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full mb-8">
        {/* Golf Signup Form */}
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
            <label className="block mb-2">Team Member 1</label>
            <input 
              type="text" 
              {...register("teamMember1")} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter the first team member's name (optional)" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Team Member 2</label>
            <input 
              type="text" 
              {...register("teamMember2")} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter the second team member's name (optional)" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Team Member 3</label>
            <input 
              type="text" 
              {...register("teamMember3")} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter the third team member's name (optional)" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Team Member 4</label>
            <input 
              type="text" 
              {...register("teamMember4")} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter the fourth team member's name (optional)" 
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

        <div className="mt-6 flex justify-center">
          <button 
            type="button" 
            className="bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-600 transition-colors duration-300"
            onClick={() => alert('Redirecting to payment...')}
          >
            Pay Now
          </button>
        </div>
      </form>

      {/* Idea Form */}
      <form id="idea" className="idea-form" action="">
        <svg className="idea-form__icon" viewBox="0 0 32 32" width="32px" height="32px" aria-hidden="true">
          <g fill="currentcolor">
            <path d="M16,2A10,10,0,0,0,6,12a9.19,9.19,0,0,0,3.46,7.62c1,.93,1.54,1.46,1.54,2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2,7.2,0,0,1,8,12a8,8,0,0,1,16,0,7.2,7.2,0,0,1-2.82,6.14c-1.07,1-2.18,2-2.18,3.86h2c0-.92.53-1.45,1.54-2.39A9.18,9.18,0,0,0,26,12,10,10,0,0,0,16,2Z" />
            <rect x="11" y="24" width="10" height="2"/>
            <rect x="13" y="28" width="6" height="2"/>
          </g>
        </svg>
        <button className="idea-form__btn idea-form__btn--start" type="button" data-toggle>
          I have an idea
        </button>
        <div className="idea-form__fill"></div>
        <div className="idea-form__content">
          <label htmlFor="my-idea" className="idea-form__label">Idea</label>
          <textarea id="my-idea" className="idea-form__textarea" placeholder="My idea is…"></textarea>
          <button className="idea-form__btn" type="submit" disabled>Submit</button>
        </div>
      </form>
    </div>
  );
}

// JavaScript logic for the "Idea Form"
class IdeaForm {
  // ... (the rest of the IdeaForm class code remains unchanged)
}

window.addEventListener("DOMContentLoaded",() => {
  const ideaForm = new IdeaForm("#idea");
});
