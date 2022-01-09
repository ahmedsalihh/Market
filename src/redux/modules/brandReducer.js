import * as brandActions from '../actions/brandActions';

const defaultState = {
  brands: [],
  filter: null,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case brandActions.FETCH_BRANDS_SUCCESS:
      let tmpBrands;
      if (state.filter !== null) {
        tmpBrands = [
          { slug: 'all', name: 'All' },
          ...action.brands.filter(f => f.name.includes(state.filter)),
        ];
      } else {
        tmpBrands = [{ slug: 'all', name: 'All' }, ...action.brands];
      }
      return { ...state, brands: [...tmpBrands], error: null };
    case brandActions.SET_BRAND_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
