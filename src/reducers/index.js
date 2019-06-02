import { combineReducers } from 'redux';
import queryReducer from './queries';

export default combineReducers({
	queries: queryReducer
});
