import { ADD_TO_CART, REMOVE_FROM_CART } from "../Vid_079_constants";

export const addToCart = (data) => {
  // console.log("action:", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
