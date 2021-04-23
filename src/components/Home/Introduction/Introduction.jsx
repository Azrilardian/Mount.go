import React, { useEffect } from "react";
import dotPatternImage from "../../../assets/img/dot.png";
import AnimationImg from "./AnimationImg";
import onScreenEffect from "../../../js/onScreenEffect";
import "../../../style/css/introduction.css";

const Introduction = () => {
	useEffect(() => {
		onScreenEffect(".onscreen-element", "onscreen-effect", "-60px");
	}, []);

	return (
		<section className="position-relative introduction">
			<img src={dotPatternImage} alt="dot.png" className="position-absolute introduction__img" />
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-5 col-md-6 col-sm-12 text-white introduction__left onscreen-element">
						<h1 className="introduction__left__header">
							WHAT <span>US</span> ?
						</h1>
						<p className="introduction__left__paragraph">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio culpa recusandae tenetur excepturi sint quasi voluptatibus perspiciatis ea veritatis, ipsa
							laudantium illum, molestiae nulla ullam adipisci neque eaque. Asperiores earum neque, itaque beatae, excepturi maiores maxime architecto repellat minima perspiciatis
							perferendis quaerat saepe voluptates officia consectetur, magni expedita? Laudantium!
						</p>
					</div>

					<picture className="col-lg-6 col-md-6 col-sm-12 introduction__right onscreen-element" loading="lazy" decoding="async">
						<AnimationImg></AnimationImg>
					</picture>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
