import { ADD_QUERY, FETCH_QUERIES } from '../actions/actionTypes';

const initialState = {
	queries: [],
	query: {
		id: null,
		text: null
	}
};

const queryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_QUERY:
			console.log(state);
			return {
				...state,
				queries: [
					...state.queries,
					{
						id: action.id,
						text: action.payload
					}
				]
			};
		case FETCH_QUERIES:
			console.log(state);
			return state;
		default:
			return state;
	}
};

export default queryReducer;
