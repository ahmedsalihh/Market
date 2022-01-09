import * as productActions from '../actions/productActions';

const defaultState = {
  products: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case productActions.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: [...action.products], error: null };
    default:
      return state;
  }
};
