import { ADD_TO_CART, REMOVE_FROM_CART } from "../Vid_079_constants";

const initialState = {
  cartData: [],
};

export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer:", action);
      // return { ...state, cartData: action.data }; // NO ARRAY - TESTING ONLY
      return [...state, { cartData: action.data }]; // changed to array
    case REMOVE_FROM_CART:
      // console.log(action);
      state.pop();
      return [...state];
    default:
      return state;
  }
}
