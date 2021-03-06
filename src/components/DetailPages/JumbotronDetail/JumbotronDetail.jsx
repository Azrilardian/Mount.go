import React, { useEffect } from "react";
import mountImgCompress from "../../../assets/img/over-compress/jumbotron-pict-1.webp";
import mountImg from "../../../assets/img/jumbotron-pict-1.webp";
import lazyLoadEffect from "../../../js/lazyLoadEffect";
import "../../../style/css/jumbotron-detail.css";
import onScreenEffect from "../../../js/onScreenEffect";

const JumbotronDetail = () => {
	useEffect(() => {
		lazyLoadEffect();
		onScreenEffect(".onscreen-element", "onscreen-effect");
	});
	return (
		<section className="jumbotron-detail d-flex align-items-end">
			<div className="container">
				<div className="row align-items-center jumbotron-detail__heading">
					<div className="col-lg-4 col-md-5 col-sm-4 col-5 mb-3">
						<picture className="jumbotron-detail__heading__picture">
							<img src={mountImgCompress} data-src={mountImg} alt="jumbotron-pict-1.webp" loading="lazy" dicoding="async" className="lazy-load jumbotron-detail__heading__picture__img" />
						</picture>
					</div>
					<div className="col-lg-8 col-md-7 col-sm-8 col-7">
						<div className="jumbotron-detail__heading__picture__text onscreen-element">
							<h2 className="jumbotron-detail__heading__picture__text__mount-name">Rinjani mount, Lombok</h2>
							<p className="jumbotron-detail__heading__picture__text__mount-country">Indonesia</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JumbotronDetail;
