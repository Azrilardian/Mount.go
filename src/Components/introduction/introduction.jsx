import React from "react";
import campImage from "../../img/undraw_trip_dv9f.svg";
import dotPatternImage from "../../img/dot.png";
import "../../style/css/introduction.css";

const Introduction = () => {
	return (
		<>
			<section className="introduction">
				<img src={dotPatternImage} alt="dot.png" className="introduction__img" />
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-6 col-sm-12 introduction__left">
							<h1 className="introduction__left__heading">
								WHAT <span>US</span> ?
							</h1>
							<p className="introduction__left__paragraph">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio culpa recusandae tenetur excepturi sint quasi voluptatibus perspiciatis ea veritatis, ipsa
								laudantium illum, molestiae nulla ullam adipisci neque eaque. Asperiores earum neque, itaque beatae, excepturi maiores maxime architecto repellat minima perspiciatis
								perferendis quaerat saepe voluptates officia consectetur, magni expedita? Laudantium!
							</p>
						</div>
						<picture className="col-lg-6 col-md-6 col-sm-12 introduction__right img-fluid" loading="lazy" decoding="async">
							<img src={campImage} alt="undraw_trip_dv9f.svg" />
						</picture>
					</div>
				</div>
			</section>
		</>
	);
};

export default Introduction;
