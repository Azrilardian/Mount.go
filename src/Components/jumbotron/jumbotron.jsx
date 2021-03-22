import React from "react";
import Navbar from "../navbar/navbar";
import styles from "../../style/css/jumbotron.module.css";
import mountImgOne from "../../img/cristina-gottardi.jpg";
import mountImgTwo from "../../img/arno-senoner.jpg";

const Jumbotron = () => {
	return (
		<>
			<Navbar></Navbar>
			<section className={styles.jumbotron}>
				<div className={`container ${styles.container}`}>
					<div className={`row ${styles.row}`}>
						<div className={styles.tagline}>
							<h1 className={styles.tagline__heading}>TO THE MOUNT.</h1>
							<p className={styles.tagline__paragraph}>makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai.</p>
							<button className={styles.tagline__button}>
								<span></span>
							</button>
						</div>
						<div className={`col ${styles["mount-information"]}`}>
							<div className={`row ${styles.row}`}>
								<div className={`col-lg-4 col-md-4 col-sm-4 col-6 ${styles.mount}`}>
									<h2 className={styles.mount__name}>Rinjani, Lombok</h2>
									<p className={styles.mount__country}>Indonesia</p>
									<p className={styles.mount__description}>makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai dan bersuka cita disana </p>
									<button className={styles.mount__button}>
										<span>See Detail</span>
										<span>--></span>
									</button>
								</div>
								<div className={`col-lg-8 col-md-8 col-sm-8 col-6 ${styles.picture}`}>
									<picture>
										<span>
											<button>Zoom</button>
										</span>
										<img src={mountImgOne} alt="cristina-gottardi.jpg" loading="lazy" decoding="async" />
									</picture>
									<picture>
										<span>
											<button>Zoom</button>
										</span>
										<img src={mountImgTwo} alt="arno-senoner.jpg" loading="lazy" decoding="async" />
									</picture>
									<button className={styles.picture__button}>See All</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Jumbotron;
