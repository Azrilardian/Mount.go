import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import styles from "../../style/css/jumbotron.module.css";
import mountImgOne from "../../img/cristina-gottardi.jpg";
import mountImgTwo from "../../img/arno-senoner.jpg";
import typeWritterEffect from "../../js/writtingeffect";
class Jumbotron extends Component {
	componentDidMount() {
		typeWritterEffect();
	}

	render() {
		return (
			<>
				<Navbar></Navbar>
				<section className={`overflow-hidden ${styles.jumbotron}`}>
					<div className={`container d-flex justify-content-center h-100 align-items-center ${styles.container}`}>
						<div className={`row w-100 flex-column justify-content-evenly ${styles.row}`}>
							<div className={`d-flex flex-column justify-content-end align-items-center text-white pb-3 ${styles.tagline}`}>
								<h1 className={`m-0 ${styles.tagline__heading}`}>TO THE MOUNT.</h1>
								<p className={`text-center ${styles.tagline__paragraph}`}>makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai.</p>
								<button className={styles.tagline__button}>
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
											<img src={mountImgOne} alt="cristina-gottardi.jpg" loading="lazy" decoding="async" />
										</picture>
										<picture className="position-relative overflow-hidden d-flex justify-content-center align-items-center">
											<div className="picture__container">
												<span className="lnr lnr-eye picture__icon"></span>
											</div>
											<img src={mountImgTwo} alt="arno-senoner.jpg" loading="lazy" decoding="async" />
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
