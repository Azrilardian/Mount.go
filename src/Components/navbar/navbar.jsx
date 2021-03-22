import React from "react";
import styles from "../../style/css/navbar.module.css";

const Navbar = () => {
	return (
		<header>
			<div className="container">
				<nav className={`row ${styles.nav}`}>
					<div className="col-lg-7 col-md-5 col-sm-4">
						<h3 className={styles.nav__logo}>
							<a href="#">Mount.go</a>
						</h3>
					</div>
					<ul className={`col-lg-5 col-md-7 col-sm-8 ${styles.nav__navigations}`}>
						<li className={styles.nav__navigation}>
							<a href="#">Home</a>
						</li>
						<li className={styles.nav__navigation}>
							<a href="#">Info</a>
						</li>
						<li className={styles.nav__navigation}>
							<a href="#">Price</a>
						</li>
						<li className={styles.nav__navigation}>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
