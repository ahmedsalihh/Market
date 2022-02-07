import * as tagActions from '../actions/tagActions';

const defaultState = {
  allTags: [],
  tags: [],
  selectedTags: [],
  filter: null,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case tagActions.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: [...action.tags],
        allTags: [...action.tags],
        error: null,
      };
    case tagActions.SET_TAG_FILTER:
      let tmpTags;
      if (action.filter === '' || action.filter === null) {
        tmpTags = state.allTags;
      } else {
        tmpTags = [
          ...state.allTags.filter(f =>
            f.toLowerCase().includes(action.filter.toLowerCase()),
          ),
        ];
      }
      return {
        ...state,
        filter: action.filter,
        tags: [...tmpTags],
      };
    case tagActions.SET_SELECTED_TAG:
      let tmpSelected;
      if (state.selectedTags.length === 0) {
        tmpSelected = [action.tag];
      } else {
        if (state.selectedTags.find(f => f === action.tag) === undefined) {
          tmpSelected = [...state.selectedTags, action.tag];
        } else {
          tmpSelected = state.selectedTags.filter(f => f !== action.tag);
        }
      }
      return {
        ...state,
        selectedTags: [...tmpSelected],
      };
    case tagActions.RESET_TAG:
      return {
        ...state,
        selectedTags: [],
      };
    default:
      return state;
  }
};
