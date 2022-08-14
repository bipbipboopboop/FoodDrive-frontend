import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
// import CheckoutForm from "./components/CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
  return <Elements stripe={stripePromise}></Elements>;
};

export default Payment;
