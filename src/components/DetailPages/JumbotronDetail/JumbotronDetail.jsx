import React, { useEffect } from "react";
import mountImgCompress from "../../../assets/img/over-compress/jumbotron-pict-1.webp";
import mountImg from "../../../assets/img/jumbotron-pict-1.webp";
import lazyLoadEffect from "../../../js/lazyLoadEffect";
import "../../../style/css/jumbotron-detail.css";

const JumbotronDetail = () => {
	useEffect(() => {
		lazyLoadEffect();
	});

	return (
		<section className="jumbotron-detail d-flex align-items-end">
			<div className="container">
				<div className="row align-items-center jumbotron-detail__heading">
					<div className="col-lg-4 col-md-5 col-sm-7 col-7 mb-3">
						<picture className="jumbotron-detail__heading__picture">
							<img src={mountImgCompress} data-src={mountImg} alt="jumbotron-pict-1.webp" loading="lazy" dicoding="async" className="lazy-load jumbotron-detail__heading__picture__img" />
						</picture>
					</div>
					<div className="col-lg-8 col-md-7 col-sm-12 col-12">
						<div className="jumbotron-detail__heading__picture__text">
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
