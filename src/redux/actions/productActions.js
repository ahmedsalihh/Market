import Axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export const getProducts = () => {
  return async dispatch => {
    try {
      const products = await Axios.get(
        'http://localhost:3000/items?_page=1&_limit=20',
      );
      dispatch(getProductsSuccess(products.data));
    } catch (error) {
      dispatch(getProductsFail(error));
    }
  };
};

export const getProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

export const getProductsFail = error => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    error,
  };
};
