import api from "./api";

export default class ApiService {
  static saveStripeInfo(data = {}) {
    return api.post(
      `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}/payments/save-stripe-info/`,
      data
    );
  }
}
