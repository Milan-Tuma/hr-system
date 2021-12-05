import api from '../../api';

// Creates API request to endpoints
class EmployeeDataService {
	getAll() {
		return api.get('/employees');
	}

	getByPosition() {
		return api.get('/employees/statistics_by_position');
	}

	create(data) {
		return api.post('/employees', data);
	}

	delete(id) {
		return api.delete(`/employees/${id}`);
	}
}

export default new EmployeeDataService();
