import { useState, memo, Fragment } from 'react';

import Modal from './ui/Modal';
import DeleteCard from './DeleteCard';
import classes from './EmployeeCard.module.css';

const EmployeeCard = memo(({ id, name, age, position, onDelete }) => {
	const [showDelete, setShowDelete] = useState(false);

	let shortName = '';
	if (name) {
		const nameArr = name.split(' ');
		shortName = `${nameArr[0][0]}${nameArr[1][0]}`;
	}

	return (
		<Fragment>
			{showDelete && (
				<Modal onClose={() => setShowDelete(false)}>
					<DeleteCard id={id} onDelete={onDelete} />
				</Modal>
			)}
			<div className={classes.container} key={id}>
				<ul className={classes.wrapper}>
					<li className={classes.inicials}>{shortName}</li>
					<li>{name}</li>
					<li>{age} years old</li>
					<li>{position}</li>
					<li
						onClick={() => {
							setShowDelete(!showDelete);
						}}
						className={classes.delete}
					>
						<i className="fas fa-trash-alt" />
					</li>
				</ul>
			</div>
		</Fragment>
	);
});

export default EmployeeCard;
