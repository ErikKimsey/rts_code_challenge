import { ADD_QUERY, FETCH_QUERIES } from './actionTypes';

let nextQuery = 0;

export const addQuery = (query) => (dispatch) => {
	console.log(query);

	dispatch({
		type: ADD_QUERY,
		id: nextQuery++,
		payload: query
	});
};

export const fetchQueries = () => (dispatch) => {
	dispatch({
    type: FETCH_QUERIES,
	});
};
