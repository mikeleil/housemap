import { FETCH_POST, FETCH_SCHEMA } from '../actions/types';

const initialState = {
  postss: [],
  schemas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        postss: action.payload
      };
    case FETCH_SCHEMA:
      return {
        ...state,
        schemas: action.payload
      };  
    default:
      return state;
  }
}
