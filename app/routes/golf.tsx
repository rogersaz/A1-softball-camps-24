import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import 'tailwindcss/tailwind.css';

const supabaseUrl = 'https://omhsepwfnkxmzjqvydun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taHNlcHdmbmt4bXpqcXZ5ZHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDEzMzcsImV4cCI6MjAyNzIxNzMzN30.did1LkX1hVTxQs-nQLWxlSNSsL_WSJIV89HKcVPPfC4';
const supabase = createClient(supabaseUrl, supabaseKey);

function GolfSignup() {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Golf background.jpg')` }}>
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

      {/* Add the additional idea form component below */}
      <IdeaFormComponent />
    </div>
  );
}

function IdeaFormComponent() {
  useEffect(() => {
    const ideaForm = new IdeaForm("#idea");
  }, []);

  return (
    <div id="idea" className="idea-form">
      <button type="button" className="idea-form__btn idea-form__btn--start" data-toggle="true">
        Share your ideas
      </button>
      <div className="idea-form__fill"></div>
      <div className="idea-form__content">
        <label className="idea-form__label" htmlFor="name">Name</label>
        <input id="name" type="text" className="idea-form__textarea" placeholder="Your name" />
        <label className="idea-form__label" htmlFor="email">Email</label>
        <input id="email" type="email" className="idea-form__textarea" placeholder="Your email" />
        <button type="submit" className="idea-form__btn">Submit</button>
      </div>
    </div>
  );
}

// The TypeScript class (IdeaForm) should be added as-is to your project.
// Ensure to import this file if it is located in a different file.

export default GolfSignup;
