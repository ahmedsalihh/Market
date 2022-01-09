import Axios from 'axios';

export const FETCH_TAGS = 'FETCH_TAGS';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAIL = 'FETCH_TAGS_FAIL';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';

export const getTags = () => {
  return async dispatch => {
    try {
      const tags = await Axios.get('http://localhost:3000/items');
      const uniqueTags = new Set();
      tags.data.map(item => item.tags.map(t => uniqueTags.add(t)));
      dispatch(getTagsSuccess(Array.from(uniqueTags)));
    } catch (error) {
      dispatch(getTagsFail(error));
    }
  };
};

export const getTagsSuccess = tags => {
  return {
    type: FETCH_TAGS_SUCCESS,
    tags,
  };
};

export const getTagsFail = error => {
  return {
    type: FETCH_TAGS_FAIL,
    error,
  };
};

export const setFilter = filter => {
  return {
    type: SET_TAG_FILTER,
    filter,
  };
};
