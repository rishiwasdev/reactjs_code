import { ADD_TO_CART } from "../Vid_079_constants";

const initialState = {
  cartData: [],
};

export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer:", action);
      // return { ...state, cartData: action.data };
      return [...state, { cartData: action.data }]; // changed to array
    default:
      return state;
  }
}
