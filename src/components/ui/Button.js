import classes from './Button.module.css';

const Button = ({ onClick, text }) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
