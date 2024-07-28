import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { Link } from "@remix-run/react";
import 'tailwindcss/tailwind.css';

const supabaseUrl = 'https://omhsepwfnkxmzjqvydun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taHNlcHdmbmt4bXpqcXZ5ZHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDEzMzcsImV4cCI6MjAyNzIxNzMzN30.did1LkX1hVTxQs-nQLWxlSNSsL_WSJIV89HKcVPPfC4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data);
    setIsSubmitting(true);
    try {
      const { data: supabaseData, error } = await supabase
        .from('camp-signup')
        .insert([{ 
          name: data.name, 
          address: data.address,
          phone: data.phone,
          email: data.email,
          playingPositions: data.playingPositions,
          age: data.age,
          experienceLevel: data.experienceLevel
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Supabase response:', supabaseData);
      alert('Signup Successful! 🎉 Congratulations, slugger! You\'ve officially stepped up to the plate. Get ready to knock it out of the park at the Wildcat Summer Camp! See you on the field! 🌟⚾');
    } catch (error) {
      console.error('Error:', error);
      alert(`Error submitting signup: 😱 Uh-oh! Looks like our softball flew out of the park and hit the wrong button. Please check your form and try again. Don't worry, we'll catch it this time! 🥎🔄: ${error.message}`);
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
            A1 Softball Camp Signup
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Name</label>
            <input 
              type="text" 
              {...register("name", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Address</label>
            <input 
              type="text" 
              {...register("address", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your address" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Phone</label>
            <input 
              type="text" 
              {...register("phone", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your phone number" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Players Age</label>
            <input 
              type="number" 
              {...register("age", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your age" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Experience Level</label>
            <input 
              type="text" 
              {...register("experienceLevel", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your experience level" 
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2">Favorite Softball Position:</label>
          <input 
            type="text" 
            {...register("playingPositions", { required: true })} 
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter positions" 
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 font-montserrat"
            disabled={isSubmitting}
          >
            Submit Signup
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <a 
            href="https://wildcatssc24.com/"  
            className="flex items-center justify-center rounded-md bg-gray-500 px-4 py-3 font-medium text-white hover:bg-gray-600 transition-colors duration-300 font-montserrat"
          >
            HOME
          </a>
        </div>
      </form>
    </div>
  );
}
