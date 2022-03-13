import classes from './Footer.module.css';

const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.help}>
				<a href="/" className={classes.helpIcon}>
					<i className="far fa-question-circle" />
				</a>
				<a href="/" className={classes.helpIcon}>
					<i className="far fa-envelope" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
