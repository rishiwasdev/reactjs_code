import { ADD_TO_CART } from "../Vid_079_constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

// Vid 
// export const removeFromCart = (data) => {
//   return {
//     type: "REMOVE_FROM_CART",
//     data: data,
//   };
// };
