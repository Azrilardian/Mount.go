import React from "react";
import styles from "../../style/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className="row d-flex justify-content-between align-items-center py-3">
					<div className="col-6">
						<p className={`m-0 text-white ${styles.footer__copyright}`}>Copyright Azril ardian | 2020 All rights reserved.</p>
					</div>
					<div className={`col-6 d-flex justify-content-end ${styles.footer__socmed}`}>
						<a href="#" className="text-white mr-4">
							In
						</a>
						<a href="#" className="text-white mr-4">
							Fb
						</a>
						<a href="#" className="text-white mr-4">
							Tw
						</a>
						<a href="#" className="text-white">
							Ig
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
