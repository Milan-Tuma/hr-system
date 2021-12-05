import { combineReducers } from 'redux';
import employees from './employees';
import positions from './positions';

// Combined reducers are then used to comunicate with store
export default combineReducers({
	employees,
	positions,
});
