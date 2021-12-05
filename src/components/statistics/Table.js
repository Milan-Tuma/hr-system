import classes from './Table.module.css';

const Table = ({ data, avgAge, totalPos }) => {
	return (
		<div className={classes.grid}>
			<div className={classes.row}>
				<div>Position</div>
				<div>Number of employees</div>
				<div>Average age</div>
			</div>
			{data.map((pos) => {
				return (
					<div className={classes.row} key={pos.position}>
						<div>{pos.position}</div>
						<div>{pos.count}</div>
						<div>{pos.age.toFixed(1)}</div>
					</div>
				);
			})}
			{data && (
				<div className={classes.row}>
					<div>Total</div>
					{totalPos && <div>{totalPos}</div>}
					{avgAge && <div>{avgAge.toFixed(1)}</div>}
				</div>
			)}
		</div>
	);
};

export default Table;
