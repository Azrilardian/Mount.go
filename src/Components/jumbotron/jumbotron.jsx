import React from "react";
import Navbar from "../navbar/navbar";
import "../../style/css/jumbotron.css";
import mountImgOne from "../../img/cristina-gottardi.jpg";
import mountImgTwo from "../../img/arno-senoner.jpg";

const Jumbotron = () => {
	return (
		<>
			<Navbar></Navbar>
			<section className="jumbotron">
				<div className="container">
					<div className="row">
						<div className="col tagline">
							<h1 className="tagline__heading">TO THE MOUNT.</h1>
							<p className="tagline__paragraph">makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai.</p>
							<button className="tagline__button">
								<span></span>
							</button>
						</div>
						<div className="col mountinformation">
							<div className="row">
								<div className="col-4 mount">
									<h2 className="mount__name">Rinjani, Lombok</h2>
									<p className="mount__country">Indonesia</p>
									<p className="mount__description">makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai dan bersuka cita disana </p>
									<button className="mount__button">
										<span>See Detail</span>
										<span>--></span>
									</button>
								</div>
								<div className="col-8 picture">
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
									<button className="picture-button">See All</button>
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
