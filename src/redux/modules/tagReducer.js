import * as tagActions from '../actions/tagActions';

const defaultState = {
  tags: [],
  filter: null,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case tagActions.FETCH_TAGS_SUCCESS:
      let tmpTags;
      if (state.filter !== null) {
        tmpTags = [
          'All',
          ...action.tags.filter(f => f.name.includes(state.filter)),
        ];
      } else {
        tmpTags = ['All', ...action.tags];
      }
      return { ...state, tags: [...tmpTags], error: null };
    case tagActions.SET_TAG_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
