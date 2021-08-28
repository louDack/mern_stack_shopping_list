import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios'

// if I use '/api/items', shoppingList component doesnt render and I get a 
// Proxy error: Could not proxy request /api/items from localhost:3000 to http://localhost:5000. See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).

// AND NOW, axios.get('/api/items') WORKS!!!! for some reason...

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
};

export const deleteItem = (id) => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
};

export const addItem = (item) => dispatch => {
  axios
    .post('/api/items', item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};