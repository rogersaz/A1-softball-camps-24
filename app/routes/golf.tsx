import { useState, useEffect } from "react";
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

      {/* Second Form */}
      <IdeaFormComponent />
    </div>
  );
}

function IdeaFormComponent() {
  useEffect(() => {
    const ideaForm = new IdeaForm("#idea");
  }, []);

  return (
    <form id="idea" className="idea-form">
      <svg className="idea-form__icon" viewBox="0 0 24 24" width="32px" height="32px" aria-hidden="true">
        <g fill="currentColor">
          <path d="M14.06,2a1,1,0,0,0-.71.29l-10,10a1,1,0,0,0-.26.45l-2,7a1,1,0,0,0,1.25,1.25l7-2a1,1,0,0,0,.45-.26l10-10a1,1,0,0,0,0-1.41l-4-4A1,1,0,0,0,14.06,2Zm0,2.41L17.65,8,14,11.65,10.35,8Zm-5,5L13,12.65,6.65,19H3.47Z"/>
        </g>
      </svg>
      <button className="idea-form__btn idea-form__btn--start" type="button" data-toggle>
        Pencil Me In
      </button>
      <div className="idea-form__fill"></div>
      <div className="idea-form__content">
        <label htmlFor="name" className="idea-form__label">Name</label>
        <input type="text" id="name" className="idea-form__textarea" placeholder="Enter your name" required />
        <label htmlFor="email" className="idea-form__label">Email</label>
        <input type="email" id="email" className="idea-form__textarea" placeholder="Enter your email" required />
        <button className="idea-form__btn" type="submit">Submit</button>
      </div>
    </form>
  );
}

class IdeaForm {
  form: HTMLFormElement | null;
  timeout = 0;

  private _name = "";
  private _email = "";
  private _expanded = false;
  private _state = SubmitState.Default;

  constructor(el: string) {
    this.form = document.querySelector(el);
    this.form?.addEventListener("click", this.toggle.bind(this));
    this.form?.addEventListener("input", this.ideaUpdate.bind(this));
    this.form?.addEventListener("submit", this.ideaSubmit.bind(this));
    document.addEventListener("click", this.outsideToCollapse.bind(this));
    document.addEventListener("keydown", this.escToCollapse.bind(this));
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    this.updateSubmitButtonState();
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
    this.updateSubmitButtonState();
  }

  get expanded(): boolean {
    return this._expanded;
  }

  set expanded(value: boolean) {
    this._expanded = value;
    this.form?.setAttribute("data-expanded", `${value}`);
  }

  get state() {
    return this._state;
  }

  set state(value: SubmitState) {
    this._state = value;

    const nameInput = this.form?.querySelector("#name") as HTMLInputElement;
    const emailInput = this.form?.querySelector("#email") as HTMLInputElement;
    const submitBtn = this.form?.querySelector("[type=submit]") as HTMLButtonElement;

    if (nameInput) {
      nameInput.disabled = value !== SubmitState.Default;
    }

    if (emailInput) {
      emailInput.disabled = value !== SubmitState.Default;
    }

    if (submitBtn) {
      if (value === SubmitState.Sending) {
        submitBtn.textContent = Label.Sending;
        submitBtn.disabled = true;
      } else if (value === SubmitState.Done) {
        submitBtn.textContent = Label.Sent;
      } else {
        submitBtn.textContent = Label.Submit;
      }
    }
  }

  updateSubmitButtonState(): void {
    const submitBtn = this.form?.querySelector("[type=submit]") as HTMLButtonElement;

    if (submitBtn) {
      submitBtn.disabled = this._name.length === 0 || this._email.length === 0;
    }
  }

  ideaUpdate(e: Event): void {
    const input = e.target as HTMLInputElement;

    if (input.id === "name") {
      this.name = input.value;
    } else if (input.id === "email") {
      this.email = input.value;
    }
  }

  toggle(e: Event): void {
    const button = e.target as HTMLButtonElement;

    if (button.hasAttribute("data-toggle")) {
      this.expanded = !this.expanded;

      if (this.expanded) {
        const nameInput = this.form?.querySelector("#name") as HTMLInputElement;
        nameInput?.focus();
      }
    }
  }

  async ideaSubmit(e: SubmitEvent): Promise<void> {
    e.preventDefault();

    if (this.state !== SubmitState.Default) return;

    const delaySending = 1000;
    const delayDone = 600;
    const delayReset = 300;

    this.state = SubmitState.Sending;

    return await new Promise<void>((resolve) => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        resolve();
      }, delaySending);
    }).then(async () => {
      this.state = SubmitState.Done;

      return await new Promise<void>((resolve) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          resolve();
        }, delayDone);
      });
    }).then(() => {
      this.expanded = false;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.form?.reset();
        this.name = "";
        this.email = "";
        this.state = SubmitState.Default;
      }, delayReset);
    });
  }

  outsideToCollapse(e: Event): void {
    if (this.state !== SubmitState.Default) return;

    let parent: HTMLElement | null = e.target as HTMLElement;

    while (parent !== null) {
      if (parent === this.form) {
        return;
      }
      parent = parent.parentElement;
    }
    this.expanded = false;
  }

  escToCollapse(e: KeyboardEvent): void {
    if (e.code === "Escape" && this.state === SubmitState.Default) {
      this.expanded = false;
    }
  }
}

const enum Label {
  Sending = "Sending…",
  Sent = "Sent",
  Submit = "Submit",
}

const enum SubmitState {
  Default = 0,
  Sending,
  Done,
}
