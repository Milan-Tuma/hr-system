import {
	GET_ALL_EMPLOYEES,
	GET_POSITION_STATS,
	CREATE_AN_EMPLOYEE,
	DELETE_AN_EMPLOYEE,
} from './types';

import EmployeeDataService from '../services/employee';

// Defines what action should be done when action creator reaches
// Try - catch block either gets response or potential error
// Needs to call async function due to API request

export const getAllEmployees = () => async (dispatch) => {
	try {
		const res = await EmployeeDataService.getAll();

		dispatch({
			type: GET_ALL_EMPLOYEES,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getPositionStats = () => async (dispatch) => {
	try {
		const res = await EmployeeDataService.getByPosition();

		dispatch({
			type: GET_POSITION_STATS,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const createEmployee = (name, age, position) => async (dispatch) => {
	try {
		const res = await EmployeeDataService.create({ name, age, position });

		dispatch({
			type: CREATE_AN_EMPLOYEE,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const deleteEmployee = (id) => async (dispatch) => {
	try {
		await EmployeeDataService.delete(id);

		dispatch({
			type: DELETE_AN_EMPLOYEE,
			payload: { id },
		});
	} catch (error) {
		console.log(error);
	}
};
