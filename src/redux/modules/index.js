import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import brands from './brandReducer';
import tags from './tagReducer';
import products from './productReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    brands,
    tags,
    products,
  });

export default createRootReducer;
