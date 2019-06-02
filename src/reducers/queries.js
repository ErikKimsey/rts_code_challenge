import { ADD_QUERY, FETCH_QUERIES } from '../actions/actionTypes';

const queryReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_QUERY:
			console.log(action);

			return [ ...state, action.payload ];
		case FETCH_QUERIES:
			console.log(state);
			return state;
		default:
			return state;
	}
};

export default queryReducer;
