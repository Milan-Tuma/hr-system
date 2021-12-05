import {
	GET_ALL_EMPLOYEES,
	// GET_POSITION_STATS,
	CREATE_AN_EMPLOYEE,
	DELETE_AN_EMPLOYEE,
} from '../actions/types';

const initialState = [];

// Tells our store which actions there will be
// Also gives initial state to the store
function employeeReducer(employees = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_EMPLOYEES:
			return payload;
		case CREATE_AN_EMPLOYEE:
			return [...employees, payload];
		case DELETE_AN_EMPLOYEE:
			return employees.filter((employee) => employee.id !== payload.id);
		default:
			return employees;
	}
}

export default employeeReducer;
