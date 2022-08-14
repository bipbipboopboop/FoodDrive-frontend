import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import ApiService from "../../Services/4.payment.services";
// import ApiService from "../api";

function CheckoutFormik({ props }) {
  return (
    <form onSubmit={props.handleSubmit} className="stripe-form">
      <div className="form-row">
        <label htmlFor="email">Email Address</label>
        <input
          className="form-input"
          id="email"
          name="name"
          type="email"
          placeholder="jenny.rosen@example.com"
          required
          value={props.email}
          onChange={(event) => {
            props.setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-row">
        <label for="card-element">Credit or debit card</label>
        <CardElement id="card-element" onChange={props.handleChange} />
        <div className="card-errors" role="alert">
          {props.error}
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Submit Payment
      </button>
    </form>
  );
}

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements(); // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    // add these lines
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    ApiService.saveStripeInfo({
      email,
      payment_method_id: paymentMethod.id,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <CheckoutFormik
      error={error}
      email={email}
      setEmail={setEmail}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default CheckoutForm;
