import { combineReducers } from 'redux';
import queryReducer from './queries';
console.log(queryReducer);

export default combineReducers({
	queries: queryReducer
});
