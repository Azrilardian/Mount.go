import React from "react";
import styles from "../../style/css/navbar.module.css";

const Navbar = () => {
	return (
		<header className="position-sticky">
			<div className="container">
				<nav className={`row justify-content-between align-items-center ${styles.nav}`}>
					<div className="col-lg-7 col-md-5 col-sm-4 col-8">
						<h3 className={`m-0 ${styles.nav__logo}`}>
							<a href="#" className="text-white">
								Mount.go
							</a>
						</h3>
					</div>
					<ul className={`col-lg-5 col-md-7 col-sm-8 m-0 ${styles.nav__navigations}`}>
						<li className={styles.nav__navigation}>
							<a href="#" className="text-white">
								Home
							</a>
						</li>
						<li className={styles.nav__navigation}>
							<a href="#" className="text-white">
								Info
							</a>
						</li>
						<li className={styles.nav__navigation}>
							<a href="#" className="text-white">
								Price
							</a>
						</li>
						<li className={styles.nav__navigation}>
							<a href="#" className="text-white">
								Contact
							</a>
						</li>
					</ul>
					<div className={`col-4 d-flex justify-content-end`}>
						<div className={styles.nav__hamburger}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
