import * as brandActions from '../actions/brandActions';

const defaultState = {
  allBrands: [],
  brands: [],
  selectedBrands: [],
  filter: null,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case brandActions.FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        allBrands: [{ slug: 'all', name: 'All' }, ...action.brands],
        brands: [{ slug: 'all', name: 'All' }, ...action.brands],
        error: null,
      };
    case brandActions.SET_BRAND_FILTER:
      let tmpBrands;
      if (action.filter === '' || action.filter === null) {
        tmpBrands = state.allBrands;
      } else {
        tmpBrands = [
          ...state.allBrands.filter(f =>
            f.slug.toLowerCase().includes(action.filter.toLowerCase()),
          ),
        ];
      }
      return {
        ...state,
        filter: action.filter,
        brands: [...tmpBrands],
      };
    case brandActions.SET_SELECTED_BRAND:
      let tmpSelected;
      if (state.selectedBrands.length === 0) {
        tmpSelected = [{ ...action.brand }];
      } else {
        if (
          state.selectedBrands.find(f => f.slug === action.brand.slug) ===
          undefined
        ) {
          tmpSelected = [...state.selectedBrands, action.brand];
        } else {
          tmpSelected = state.selectedBrands.filter(
            f => f.slug !== action.brand.slug,
          );
        }
      }
      return {
        ...state,
        selectedBrands: [...tmpSelected],
      };
    default:
      return state;
  }
};
