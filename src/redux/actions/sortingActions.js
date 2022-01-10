export const SET_SELECTED_SORT = 'SET_SELECTED_SORT';

export const setSelectedSort = sortingType => {
  return {
    type: SET_SELECTED_SORT,
    sortingType,
  };
};
