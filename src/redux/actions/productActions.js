import { actionTypes } from "../constants/actionTypes";

export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
  };
};
export const selectedProduct = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: products
  };
};
