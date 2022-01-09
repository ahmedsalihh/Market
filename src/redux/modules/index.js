import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import brands from './brandReducer';
import tags from './tagReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    brands,
    tags,
  });

export default createRootReducer;
