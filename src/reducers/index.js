import { combineReducers } from 'redux';

import posts from './postReducer';
import schema from './postReducer';

const rootReducer = combineReducers({
  posts: posts,
  schema: schema
});

export default rootReducer;