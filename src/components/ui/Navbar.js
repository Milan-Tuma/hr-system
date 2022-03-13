import { Link, useLocation } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split('/');

	return (
		<div className={classes.container}>
			<div className={classes.logo}>
				<Link to="/">XYZ</Link>
			</div>
			<ul className={classes.links}>
				<li className={splitLocation[1] === '' ? classes.active : classes.link}>
					<Link to="/">Employees list</Link>
				</li>

				<li
					className={
						splitLocation[1] === 'statistics' ? classes.active : classes.link
					}
				>
					<Link to="/statistics">Show statistics</Link>
				</li>
			</ul>
			<h5 className={classes.copy}>&copy;2021 XYZ Software</h5>
		</div>
	);
};

export default Navbar;
