import React, { useEffect, useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import mountImgOneCompress from "../../../assets/img/over-compress/jumbotron-pict-1.webp";
import mountImgTwoCompress from "../../../assets/img/over-compress/jumbotron-pict-2.webp";
import mountImgOne from "../../../assets/img/jumbotron-pict-1.webp";
import mountImgTwo from "../../../assets/img/jumbotron-pict-2.webp";
import typeWritterEffect from "../../../js/writtingeffect";
import lazyLoadEffect from "../../../js/lazyLoadEffect";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../../../style/css/jumbotron.css";

const Jumbotron = () => {
	const [to, setTo] = useState("introduction");
	useEffect(() => {
		typeWritterEffect();
		lazyLoadEffect();
		const tagline = document.querySelector(".jumbotron__tagline");
		const button = document.querySelector(".jumbotron__tagline__button");
		const entries = (entries) => {
			entries.map((entry) => {
				if (!entry.isIntersecting) {
					button.classList.add("jumbotron__tagline__button--fixed");
					setTo("jumbotron");
				} else {
					button.classList.remove("jumbotron__tagline__button--fixed");
					setTo("introduction");
				}
			});
		};
		const observer = new IntersectionObserver(entries);
		observer.observe(tagline);
	}, []);

	return (
		<section className="overflow-hidden jumbotron" id="jumbotron">
			<div className="container d-flex justify-content-center h-100 align-items-center">
				<div className="row w-100 flex-column justify-content-evenly">
					<div className="d-flex w-100 flex-column justify-content-center align-items-center text-white pt-5 jumbotron__tagline">
						<h1 className="m-0 jumbotron__tagline__heading">TO THE MOUNT.</h1>
						<p className="text-center jumbotron__tagline__paragraph">makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai.</p>
						<button className="jumbotron__tagline__button">
							<LinkS to={to} smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass={"active"} className="text-white">
								<span className="lnr lnr-arrow-down text-white"></span>
							</LinkS>
						</button>
					</div>
					<div className="col jumbotron__mount-information">
						<div className="row align-items-end justify-content-between pb-3 m-0">
							<div className="col-lg-4 col-md-4 col-sm-5 col-5 p-0 text-white jumbotron__mount-information__mount">
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
									<span className="jumbotron__mount-information__mount__button__text">
										<LinkR to="./detail">See Detail</LinkR>
									</span>
									<LinkR className="lnr lnr-arrow-right jumbotron__mount-information__mount__button__icon" to="./detail"></LinkR>
								</button>
							</div>
							<div className="col-lg-8 col-md-8 col-sm-7 col-7 d-flex justify-content-end align-items-center p-0 jumbotron__mount-information__picture">
								<Gallery>
									<Item original={mountImgOne} thumbnail={mountImgOneCompress} width="1024" height="768">
										{({ ref, open }) => (
											<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center jumbotron__mount-information__picture__container">
												<div className="jumbotron__mount-information__picture__container__overflow" ref={ref} onClick={open}>
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
										)}
									</Item>
									<Item original={mountImgTwo} thumbnail={mountImgTwoCompress} width="1024" height="768">
										{({ ref, open }) => (
											<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center jumbotron__mount-information__picture__container">
												<div className="jumbotron__mount-information__picture__container__overflow" ref={ref} onClick={open}>
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
										)}
									</Item>
								</Gallery>
								<div className="jumbotron__mount-information__picture__button">
									<LinkR to="./allmount" className="text-white">
										<span className="lnr lnr-arrow-right jumbotron__mount-information__picture__button__icon"></span>
									</LinkR>
									<p className="jumbotron__mount-information__picture__button__text">
										<LinkR to="./allmount" className="text-white">
											See All
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
