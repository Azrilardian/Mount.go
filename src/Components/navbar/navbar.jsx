import React, { useState } from "react";
import styles from "../../style/css/navbar.module.css";

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);

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
					<ul className={`col-lg-5 col-md-7 col-sm-8 m-0 ${styles.nav__navigations}  ${sidebar ? styles.active : ""}`}>
						<li className={`position-relative ${styles.nav__navigation} ${styles["nav__navigation--first"]}`}>
							<a href="#" className="text-white">
								Home
							</a>
						</li>
						<li className={`position-relative ${styles.nav__navigation}`}>
							<a href="#" className="text-white">
								Info
							</a>
						</li>
						<li className={`position-relative ${styles.nav__navigation}`}>
							<a href="#" className="text-white">
								Price
							</a>
						</li>
						<li className={`position-relative ${styles.nav__navigation}`}>
							<a href="#" className="text-white">
								Contact
							</a>
						</li>
					</ul>
					<div className={`col-4 d-flex justify-content-end`}>
						<div
							className={styles.nav__hamburger}
							onClick={() => {
								setSidebar(!sidebar);
							}}
						>
							<span className={`${styles.nav__hamburger__line} ${styles["nav__hamburger__line--rotate-first"]} ${sidebar ? styles.active : ""}`}></span>
							<span className={`${styles.nav__hamburger__line} ${styles["nav__hamburger__line--dissapear"]} ${sidebar ? styles.active : ""}`}></span>
							<span className={`${styles.nav__hamburger__line} ${styles["nav__hamburger__line--rotate-end"]} ${sidebar ? styles.active : ""}`}></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
