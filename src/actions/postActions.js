import { FETCH_POST, FETCH_SCHEMA } from './types'
import axios from 'axios';

export const fetchPost = () => async dispatch => {
  return await axios.get(`http://demo4452328.mockable.io/properties`)
    .then((res) => {
      dispatch({
        type: FETCH_POST,
        payload: res.data.data
      })
    })
    .catch(error =>{
      console.log('error',error)
  });
};

export const fetchSchema = () => async dispatch => {
  return await axios.get(`http://demo4452328.mockable.io/templates`)
    .then((res) => {
      dispatch({
        type: FETCH_SCHEMA,
        payload: res.data
      })
    })
    .catch(error =>{
      console.log('error',error)
  });
};

