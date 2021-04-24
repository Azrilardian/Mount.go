import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import mountImgOneCompress from "../../../assets/img/over-compress/jumbotron-pict-1.webp";
import mountImgTwoCompress from "../../../assets/img/over-compress/jumbotron-pict-2.webp";
import mountImgOne from "../../../assets/img/jumbotron-pict-1.webp";
import mountImgTwo from "../../../assets/img/jumbotron-pict-2.webp";
import typeWritterEffect from "../../../js/writtingeffect";
import lazyLoadEffect from "../../../js/lazyLoadEffect";
import "../../../style/css/jumbotron.css";
const Jumbotron = () => {
	const [navbarBgColor, setNavbarBgColor] = useState(false);

	useEffect(() => {
		typeWritterEffect();
		lazyLoadEffect();
		const tagline = document.querySelector(".jumbotron__tagline");
		const button = document.querySelector(".jumbotron__tagline__button");
		const entries = (entries) => {
			entries.map((entry) => {
				if (!entry.isIntersecting) {
					button.classList.add("jumbotron__tagline__button--fixed");
					setNavbarBgColor(true);
				} else {
					button.classList.remove("jumbotron__tagline__button--fixed");
					setNavbarBgColor(false);
				}
				return false;
			});
		};
		const observer = new IntersectionObserver(entries);
		observer.observe(tagline);
	}, []);

	return (
		<section className="overflow-hidden jumbotron">
			<div className="container d-flex justify-content-center h-100 align-items-center">
				<div className="row w-100 flex-column justify-content-evenly">
					<div className="d-flex flex-column justify-content-end align-items-center text-white pb-3 jumbotron__tagline">
						<h1 className="m-0 jumbotron__tagline__heading">TO THE MOUNT.</h1>
						<p className="text-center jumbotron__tagline__paragraph">makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai.</p>
						<button className="jumbotron__tagline__button">
							<span className="lnr lnr-arrow-down text-white"></span>
						</button>
					</div>
					<div className="col jumbotron__mount-information">
						<div className="row align-items-end justify-content-between p-0 m-0">
							<div className="col-lg-4 col-md-4 col-sm-6 col-5 p-0 text-white jumbotron__mount-information__mount">
								<h2 className="m-0 jumbotron__mount-information__mount__name">Rinjani, Lombok</h2>
								<p className="jumbotron__mount-information__mount__country">Indonesia</p>
								<div className="position-relative w-100 jumbotron__mount-information__mount__description">
									<p
										className="text position-absolute jumbotron__mount-information__mount__description__text"
										data-wait="1000"
										data-words='["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, architecto suscipit? Consequuntur quis in cumque optio error consectetur, dolorum iusto."]'
									></p>
								</div>
								<button className="d-flex justify-content-between align-items-center overflow-hidden jumbotron__mount-information__mount__button">
									<span className="jumbotron__mount-information__mount__button__text">See Detail</span>
									<span className="lnr lnr-arrow-right jumbotron__mount-information__mount__button__icon"></span>
								</button>
							</div>
							<div className="col-lg-8 col-md-8 col-sm-6 col-7 d-flex justify-content-end align-items-center p-0 jumbotron__mount-information__picture">
								<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center jumbotron__mount-information__picture__container">
									<div className="jumbotron__mount-information__picture__container__overflow">
										<span className="lnr lnr-eye jumbotron__mount-information__picture__container__overflow__icon"></span>
									</div>
									<img
										src={mountImgOneCompress}
										data-src={mountImgOne}
										alt="cristina-gottardi.jpg"
										loading="lazy"
										decoding="async"
										className="lazy-load jumbotron__mount-information__picture__container__img"
									/>
								</picture>
								<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center jumbotron__mount-information__picture__container">
									<div className="jumbotron__mount-information__picture__container__overflow">
										<span className="lnr lnr-eye jumbotron__mount-information__picture__container__overflow__icon"></span>
									</div>
									<img
										src={mountImgTwoCompress}
										data-src={mountImgTwo}
										alt="arno-senoner.jpg"
										loading="lazy"
										decoding="async"
										className="lazy-load jumbotron__mount-information__picture__container__img"
									/>
								</picture>
								<div className="jumbotron__mount-information__picture__button">
									<span className="lnr lnr-arrow-right jumbotron__mount-information__picture__button__icon"></span>
									<p className="jumbotron__mount-information__picture__button__text">
										<LinkR to="./detail" className="text-white">
											See Detail
										</LinkR>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Jumbotron;
