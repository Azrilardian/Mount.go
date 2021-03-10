import React from "react";
import "../../style/css/navbar.css";

const Navbar = () => {
	return (
		<header>
			<div className="container">
				<nav className="row nav">
					<div className="col-lg-7 col-md-5 col-sm-4">
						<h3 className="nav__logo">
							<a href="#">Mount.go</a>
						</h3>
					</div>
					<ul className="nav__navigations col-lg-5 col-md-7 col-sm-8">
						<li className="nav__navigation">
							<a href="#">Home</a>
						</li>
						<li className="nav__navigation">
							<a href="#">Info</a>
						</li>
						<li className="nav__navigation">
							<a href="#">Price</a>
						</li>
						<li className="nav__navigation">
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
