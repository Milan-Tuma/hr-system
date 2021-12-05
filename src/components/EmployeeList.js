import { Component } from 'react';
import { connect } from 'react-redux';
import { getAllEmployees, deleteEmployee } from '../redux/actions/employees';

import EmployeeCard from './EmployeeCard';
import Spinner from './ui/Spinner';
import classes from './EmployeeList.module.css';
import Modal from './ui/Modal';
import AddEmployee from './AddEmployee';
import Button from './ui/Button';

class EmployeeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddModal: false,
		};
	}

	onModalClick = () => {
		this.setState((prevState) => {
			return {
				showAddModal: !prevState.showAddModal,
			};
		});
	};

	componentDidMount() {
		this.props.getAllEmployees();
	}

	render() {
		const { employees } = this.props;

		return !this.props.employees ? (
			<div className={classes.container}>
				<Spinner />
			</div>
		) : (
			<div className={classes.wrapper}>
				<Button text="Add employee" onClick={this.onModalClick} />
				{this.state.showAddModal && (
					<Modal
						onClose={() => this.setState({ showAddModal: false })}
						onContinue
					>
						<AddEmployee />
					</Modal>
				)}
				<div className={classes.employeeList}>
					{employees &&
						employees.map(({ age, name, id, position }) => (
							<EmployeeCard
								name={name}
								age={age}
								position={position}
								id={id}
								onDelete={this.props.deleteEmployee}
								key={id}
							/>
						))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		employees: state.employees,
	};
};

export default connect(mapStateToProps, {
	getAllEmployees,
	deleteEmployee,
})(EmployeeList);
