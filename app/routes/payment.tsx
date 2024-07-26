import { Link } from "@remix-run/react";
import { Helmet } from "react-helmet"; // Import Helmet if not already
import { useEffect } from "react";

export default function Payment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Payment - Wildcat Summer Softball Camp</title>
        <meta name="description" content="Make a payment for Wildcat Summer Softball Camp. Pay with credit card or Venmo." />
        <meta name="keywords" content="Wildcat Summer Softball Camp, softball camp payment, credit card payment, Venmo payment" />
        <meta name="author" content="Wildcat Summer Softball Camp" />
      </Helmet>
      <main className="relative min-h-screen bg-blue-900 sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="bg-white bg-opacity-50 p-8 rounded-md">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Payment
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    Make a payment for Wildcat Summer Softball Camp. You can pay with credit card or Venmo. Please note that there is a small fee of $3.00 for these payment methods.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <stripe-buy-button
                      buy-button-id="buy_btn_1PgwbWExDHJMsT2O5Ke7TIi0"
                      publishable-key="pk_live_51PgvbMExDHJMsT2OxKRN4RVQo7pDfY9yiyyCpyqXhhfqlwn3PQ1okFcte49lzvJaXflz0lUg6Atg4g8cRaQVo1gB00ewTxdORR"
                    >
                    </stripe-buy-button>
                  </div>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Other Payment Options
                  </h2>
                  <ul className="mt-4 max-w-lg mx-auto text-left text-xl text-black sm:max-w-3xl list-disc list-inside">
                    <li>CASH: Pay when you arrive at the camp.</li>
                    <li className="mt-2">
                      CREDIT CARD or VENMO: Use the payment button above to pay with a credit card or Venmo. A small fee of $3.00 applies to these options.
                    </li>
                    <li className="mt-2">
                      VENMO: Scan the QR code below to pay $53.00, which includes the convenience fee.
                      <div className="flex justify-center mt-4">
                        <img src="/QR-payment code.jpg" alt="Venmo QR Code" className="w-64 h-64" />
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-center text-3xl font-bold tracking-tight mt-8 text-gray-900">
                    Rain Out Date
                  </h2>
                  <p className="mt-4 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                    We know it's Surprise, AZ, and we get very little rain, but it is monsoon season. Our rain out date will be Aug 6, 2024, from 6pm - 9pm.
                  </p>

                  <div className="mt-8 flex justify-center space-x-4">
                    <Link
                      to="https://www.a1softballcamps.com/signup"
                      className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/about"
                      className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-base font-medium text-white hover:bg-green-600"
                    >
                      About
                    </Link>
                    <Link
                      to="/instructors"
                      className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-base font-medium text-white hover:bg-yellow-600"
                    >
                      Instructors
                    </Link>
                    <Link
                      to="https://www.a1softballcamps.com"
                      className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-blue-600"
                    >
                      Home
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
