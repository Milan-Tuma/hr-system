import Navbar from './Navbar';
import Footer from './Footer';

import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<div className={classes.container}>
			<nav className={classes.navigation}>
				<Navbar />
			</nav>
			<div className={classes.content}>
				<div className={classes.auth}>
					<i className="fas fa-user" />
				</div>
				<main className={classes.main}>{props.children}</main>
				<footer className={classes.footer}>
					<Footer />
				</footer>
			</div>
		</div>
	);
};

export default Layout;
