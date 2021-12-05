import { Component } from 'react';
import { connect } from 'react-redux';

import { createEmployee } from '../redux/actions/employees';
import Button from './ui/Button';
import classes from './AddEmployee.module.css';

class AddEmployee extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: null,
			name: '',
			age: 0,
			position: '',
			submitted: false,
			error: '',
		};
	}

	onChangeName = (e) => {
		this.setState({
			name: e.target.value,
			error: '',
		});
	};
	onChangeAge = (e) => {
		this.setState({
			age: e.target.value,
			error: '',
		});
	};
	onChangePosition = (e) => {
		this.setState({
			position: e.target.value,
			error: '',
		});
	};

	saveEmployee = () => {
		const { name, age, position } = this.state;

		if (!name || !age || !position) {
			this.setState({
				error: 'Please fill all fields',
			});
			return;
		}

		this.props
			.createEmployee(name, age, position)
			.then((data) => {
				this.setState({
					name: data.name,
					age: data.age,
					position: data.position,
					submitted: true,
				});
			})
			.catch((error) => {
				this.setState({
					error: 'Something went wrong',
				});
			});
	};

	newEmployee = () => {
		this.setState({
			name: '',
			age: 0,
			position: '',
			submitted: false,
		});
	};

	render() {
		return (
			<div>
				{this.state.submitted ? (
					<div>
						<h4>New employee submited</h4>
						<Button text="Add new employee" onClick={this.newEmployee} />
					</div>
				) : (
					<div className={classes.container}>
						<h4>Add new employee</h4>
						<div className={classes.input}>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								required
								value={this.state.name}
								onChange={this.onChangeName}
								name="name"
								placeholder="Firstname Lastname"
							/>
						</div>

						<div className={classes.input}>
							<label htmlFor="age">Age</label>
							<input
								type="number"
								id="age"
								required
								value={this.state.age}
								onChange={this.onChangeAge}
								name="age"
							/>
						</div>

						<div className={classes.input}>
							<label htmlFor="position">Position</label>
							<input
								type="text"
								id="position"
								required
								value={this.state.position}
								onChange={this.onChangePosition}
								name="position"
								placeholder="Current position"
							/>
						</div>
						{this.state.error ? (
							<div className={classes.error}>{this.state.error}</div>
						) : (
							<div className={classes.error}>&nbsp;</div>
						)}
						<Button text="Submit employee" onClick={this.saveEmployee} />
					</div>
				)}
			</div>
		);
	}
}

export default connect(null, { createEmployee })(AddEmployee);
