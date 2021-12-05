import { Component } from 'react';
import { connect } from 'react-redux';
import { getPositionStats } from '../redux/actions/employees';

import { BarChart } from './statistics/BarChart';
import DoughnutChart from './statistics/DoughnutChart';
import Table from './statistics/Table';

import classes from './StatisticsPage.module.css';

class StatisticsPage extends Component {
	componentDidMount() {
		this.props.getPositionStats();
	}

	render() {
		const { positions, avgAge, totalPos } = this.props;

		return (
			<div className={classes.grid}>
				{positions && (
					<div className={classes.table}>
						<Table data={positions} avgAge={avgAge} totalPos={totalPos} />
					</div>
				)}
				{positions && (
					<div className={classes.doughnut}>
						<DoughnutChart posData={positions} />
					</div>
				)}
				{positions && (
					<div className={classes.bar}>
						<BarChart
							title="Employees age"
							legend="Average age"
							posData={positions}
						/>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const updatedNames = state.positions.map((el) => {
		return {
			position: updateName(el.position),
			age: parseFloat(el.age.toFixed(1)),
			count: el.count,
		};
	});

	return {
		positions: updatedNames,
		totalPos: state.positions
			.map((pos) => pos.count)
			.reduce((a, b) => a + b, 0),
		avgAge:
			state.positions.map((pos) => pos.age).reduce((a, b) => a + b, 0) /
			state.positions.length,
	};
};

export const updateName = (name) => {
	if (name === 'CEO') {
		return name;
	}
	const nameArr = name.toLowerCase().replace(/_/g, ' ').split('');
	nameArr[0] = nameArr[0].toUpperCase();
	return nameArr.join('');
};

export default connect(mapStateToProps, { getPositionStats })(StatisticsPage);
