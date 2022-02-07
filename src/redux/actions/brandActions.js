import Axios from 'axios';

export const FETCH_BRANDS = 'FETCH_BRANDS';
export const FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS';
export const FETCH_BRANDS_FAIL = 'FETCH_BRANDS_FAIL';
export const SET_BRAND_FILTER = 'SET_BRAND_FILTER';
export const SET_SELECTED_BRAND = 'SET_SELECTED_BRAND';

export const getBrands = () => {
  return async dispatch => {
    try {
      const brands = await Axios.get('https://getir-market-case-study.herokuapp.com/api/companies');
      dispatch(getBrandsSuccess(brands.data));
    } catch (error) {
      dispatch(getBrandsFail(error));
    }
  };
};

export const getBrandsSuccess = brands => {
  return {
    type: FETCH_BRANDS_SUCCESS,
    brands,
  };
};

export const getBrandsFail = error => {
  return {
    type: FETCH_BRANDS_FAIL,
    error,
  };
};

export const setFilter = filter => {
  return {
    type: SET_BRAND_FILTER,
    filter,
  };
};

export const setSelectedBrands = brand => {
  return {
    type: SET_SELECTED_BRAND,
    brand,
  };
};
