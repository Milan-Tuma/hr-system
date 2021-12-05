import Button from './ui/Button';

const DeleteCard = ({ onDelete, id }) => {
	const onDeleteClick = () => {
		onDelete(id);
	};

	return (
		<div>
			<h4>Are you sure you want to continue?</h4>
			<Button text="Delete" onClick={onDeleteClick} />
		</div>
	);
};

export default DeleteCard;
