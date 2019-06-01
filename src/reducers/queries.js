import { ADD_QUERY, FETCH_QUERIES } from '../actions/actionTypes';

const queries = (state = [], action) => {
	switch (action.type) {
		case ADD_QUERY:
			console.log(state);
			return [ ...state, { id: action.id, text: action.text } ];
		case FETCH_QUERIES:
			console.log(state);
			return state;
		default:
			return state;
	}
};

export default queries;
