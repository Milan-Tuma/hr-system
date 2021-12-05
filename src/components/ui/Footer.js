import classes from './Footer.module.css';

const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.help}>
				<a
					href="https://www.usu.com/en-us/company/about-usu/contact/"
					className={classes.helpIcon}
				>
					<i className="far fa-question-circle" />
				</a>
				<a
					href="https://www.usu.com/en-us/company/about-usu/contact/"
					target="_blank"
					rel="noreferrer"
					className={classes.helpIcon}
				>
					<i className="far fa-envelope" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
