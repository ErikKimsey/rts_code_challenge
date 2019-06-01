import { ADD_QUERY, FETCH_QUERIES } from './actionTypes';

let nextQuery = 0;
export const addQuery = (text) => {
	console.log(text);

	return {
		type: ADD_QUERY,
		id: nextQuery++,
		text
	};
};

export const fetchQueries = () => {
	return {
		type: FETCH_QUERIES
	};
};
