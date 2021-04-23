import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "../../../style/css/navbar.css";

const Navbar = (props) => {
	const [sidebar, setSidebar] = useState(false);

	const handleSidebar = () => setSidebar(!sidebar);

	return (
		<header className={`position-sticky header ${props.setBackgroundColor ? "header--dark" : ""}`}>
			<div className="container">
				<nav className="row justify-content-between align-items-center header__nav">
					<div className="col-lg-7 col-md-5 col-sm-4 col-8">
						<h3 className="m-0 header__nav__logo">
							<LinkR to="/" className="text-white">
								Mount.go
							</LinkR>
							{/* <a href="#" className="text-white">
								Mount.go
							</a> */}
						</h3>
					</div>
					<ul className={`col-lg-5 col-md-7 col-sm-8 m-0 header__nav__navigations  ${sidebar ? "active" : ""}`}>
						<li className="position-relative header__nav__navigations__navigation header__nav__navigations__navigation--first">
							<LinkS to="navbar" className="text-white">
								Home
							</LinkS>
						</li>
						<li className="position-relative header__nav__navigations__navigation">
							<LinkS to="introducting" className="text-white">
								Info
							</LinkS>
						</li>
						<li className="position-relative header__nav__navigations__navigation">
							<LinkS to="pricing" className="text-white">
								Price
							</LinkS>
						</li>
						<li className="position-relative header__nav__navigations__navigation">
							<LinkS to="contact" className="text-white">
								Contact
							</LinkS>
						</li>
					</ul>
					<div className="col-4 d-flex justify-content-end">
						<div className="header__nav__hamburger" onClick={handleSidebar}>
							<span className={`header__nav__hamburger__line nav__hamburger__line--rotate-first ${sidebar ? "active" : ""}`}></span>
							<span className={`header__nav__hamburger__line nav__hamburger__line--dissapear ${sidebar ? "active" : ""}`}></span>
							<span className={`header__nav__hamburger__line nav__hamburger__line--rotate-end ${sidebar ? "active" : ""}`}></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
