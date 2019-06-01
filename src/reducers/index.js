import { ADD_QUERY } from '../actions/actionTypes';

const INITIAL_STATE = [];

function rootReducer(state = INITIAL_STATE, action) {
	console.log(state);

	switch (action.type) {
		case ADD_QUERY:
			console.log(action.text);

			return [ ...state, { id: action.id, text: action.text } ];
		default:
			return state;
	}
}

export default rootReducer;
