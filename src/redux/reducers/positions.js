import { GET_POSITION_STATS } from '../actions/types';

const initialState = [];

// Handles positions statistics data
function positionReducer(positions = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_POSITION_STATS:
			return payload;
		default:
			return positions;
	}
}

export default positionReducer;
