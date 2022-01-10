import Axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export const getProducts = (selectedBrands, selectedTags, sortingType) => {
  return async dispatch => {
    let sortQuery = `&_sort=${
      sortingType === 1 || sortingType === 2 ? 'price' : 'added'
    }&_order=${sortingType === 1 || sortingType === 3 ? 'asc' : 'desc'}`;

    let brandQuery = '';
    let tagQuery = '';

    selectedBrands.map(brand => (brandQuery += `&manufacturer=${brand.slug}`));
    selectedTags.map(tag => (tagQuery += `&tags=${tag}`));

    try {
      const products = await Axios.get(
        `http://localhost:3000/items?_page=1&_limit=20${sortQuery}${brandQuery}${tagQuery}`,
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
