import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import {createActionAsync, createReducerAsync} from 'redux-act-async';
import axios from 'axios';
import qs from 'qs'

const options = { noRethrow: false };
const searchRequest = data => {
  return axios.post('http://10.104.0.168:8003/search/', qs.stringify(data))
}
export const search = createActionAsync('SEARCH', searchRequest, options)
const searchReducer = createReducerAsync(search)

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
  form: formReducer,
})
