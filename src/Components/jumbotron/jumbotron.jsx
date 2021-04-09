import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import styles from "../../style/css/jumbotron.module.css";
import mountImgOneCompress from "../../img/over-compress/jumbotron-pict-1.webp";
import mountImgTwoCompress from "../../img/over-compress/jumbotron-pict-2.webp";
import mountImgOne from "../../img/jumbotron-pict-1.webp";
import mountImgTwo from "../../img/jumbotron-pict-2.webp";
import typeWritterEffect from "../../js/writtingeffect";
import lazyLoadEffect from "../../js/lazyLoadEffect";
class Jumbotron extends Component {
	state = {
		setNavbarBackground: false,
	};
	componentDidMount() {
		typeWritterEffect();
		lazyLoadEffect();
		const tagline = document.querySelector(`.${styles.tagline}`);
		const button = document.querySelector(`.${styles.tagline__button}`);
		const entries = (entries) => {
			entries.map((entry) => {
				if (!entry.isIntersecting) {
					button.classList.add(`${styles["tagline__button--fixed"]}`);
					this.setState({
						setNavbarBackground: true,
					});
				} else {
					button.classList.remove(`${styles["tagline__button--fixed"]}`);
					this.setState({
						setNavbarBackground: false,
					});
				}
				return false;
			});
		};
		const observer = new IntersectionObserver(entries);
		observer.observe(tagline);
	}

	render() {
		return (
			<>
				<Navbar setBackgroundColor={this.state.setNavbarBackground}></Navbar>
				<section className={`overflow-hidden ${styles.jumbotron}`}>
					<div className={`container d-flex justify-content-center h-100 align-items-center ${styles.container}`}>
						<div className={`row w-100 flex-column justify-content-evenly ${styles.row}`}>
							<div className={`d-flex flex-column justify-content-end align-items-center text-white pb-3 ${styles.tagline}`}>
								<h1 className={`m-0 ${styles.tagline__heading}`}>TO THE MOUNT.</h1>
								<p className={`text-center ${styles.tagline__paragraph}`}>makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai.</p>
								<button className={`${styles.tagline__button}`}>
									<span className="lnr lnr-arrow-down text-white"></span>
								</button>
							</div>
							<div className={`col ${styles["mount-information"]}`}>
								<div className={`row align-items-end justify-content-between p-0 m-0 ${styles.row}`}>
									<div className={`col-lg-4 col-md-4 col-6 p-0 text-white ${styles.mount}`}>
										<h2 className={`m-0 ${styles.mount__name}`}>Rinjani, Lombok</h2>
										<p className={styles.mount__country}>Indonesia</p>
										<div className={`position-relative w-100 ${styles.mount__description__container}`}>
											<p
												className={`text position-absolute ${styles.mount__description}`}
												data-wait="1000"
												data-words='["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, architecto suscipit? Consequuntur quis in cumque optio error consectetur, dolorum iusto."]'
											></p>
										</div>
										<button className={`d-flex justify-content-between align-items-center overflow-hidden ${styles.mount__button}`}>
											<span>See Detail</span>
											<span className="lnr lnr-arrow-right"></span>
										</button>
									</div>
									<div className={`col-lg-8 col-md-8 col-6 d-flex justify-content-end align-items-center p-0 ${styles.picture}`}>
										<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center">
											<div className="picture__container">
												<span className="lnr lnr-eye picture__icon"></span>
											</div>
											<img src={mountImgOneCompress} data-src={mountImgOne} alt="cristina-gottardi.jpg" loading="lazy" decoding="async" className="lazy-load" />
										</picture>
										<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center">
											<div className="picture__container">
												<span className="lnr lnr-eye picture__icon"></span>
											</div>
											<img src={mountImgTwoCompress} data-src={mountImgTwo} alt="arno-senoner.jpg" loading="lazy" decoding="async" className="lazy-load" />
										</picture>
										<div className={styles.picture__button}>
											<span className="lnr lnr-arrow-right"></span>
											<p>See All</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Jumbotron;
