// routes/signup.tsx
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node';
import { useActionData, Form } from '@remix-run/react';
import { supabase } from '~/supabaseClient';

export const loader: LoaderFunction = async () => {
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const address = formData.get('address');
  const phoneNumber = formData.get('phoneNumber');

  if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string' || typeof address !== 'string' || typeof phoneNumber !== 'string') {
    return json({ error: 'Invalid form data' }, { status: 400 });
  }

  const { error } = await supabase.from('users').insert([{ firstName, lastName, email, address, phoneNumber }]);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return redirect('/thank-you');
};

export default function Signup() {
  const actionData = useActionData();
  return (
    <div>
      <h1>Signup</h1>
      {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
      <Form method="post">
        <div>
          <label>
            First Name:
            <input type="text" name="firstName" required />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="lastName" required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" required />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
}
