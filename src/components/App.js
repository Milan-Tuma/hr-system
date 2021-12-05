import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import EmployeeList from './EmployeeList';
import StatisticsPage from './StatisticsPage';

const App = () => {
	return (
		<Fragment>
			<div id="modal" />
			<Routes>
				<Route path="/" element={<EmployeeList />} />
				<Route path="statistics" element={<StatisticsPage />} />
			</Routes>
		</Fragment>
	);
};

export default App;
