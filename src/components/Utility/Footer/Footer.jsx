import React from "react";
import "../../../style/css/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row d-flex justify-content-between align-items-center">
					<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
						<p className="m-0 text-white footer__copyright">Copyright Azril ardian | 2020 All rights reserved.</p>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 footer__socmed">
						<a href="In https://www.linkedin.com/in/azril-ardian-03b7471a7/" className="text-white mr-4">
							In
						</a>
						<a href="https://www.facebook.com/azril.ardian.1/" className="text-white mr-4">
							Fb
						</a>
						<a href="https://twitter.com/azrilardian" className="text-white mr-4">
							Tw
						</a>
						<a href="https://www.instagram.com/azrilardian_/" className="text-white">
							Ig
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
