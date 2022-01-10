import * as sortingActions from '../actions/sortingActions';

const defaultState = {
  sortingType: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case sortingActions.SET_SELECTED_SORT:
      return {
        ...state,
        sortingType: action.sortingType,
      };
    default:
      return state;
  }
};
