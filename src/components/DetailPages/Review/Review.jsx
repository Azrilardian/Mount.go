import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgProfilOne from "../../../assets/img/reviewer.jpg";
import "../../../style/css/review.css";

const reviewers = [
	{
		reviewerPict: imgProfilOne,
		reviewerName: "Azril Ardian Ifansyah",
		as: "Hikers",
		say: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus vero autem ex commodi expedita eveniet quibusdam voluptates, adipisci, quia ducimus explicabo repellat.",
	},
	{
		reviewerPict: imgProfilOne,
		reviewerName: "Tomy Dwi Refandy",
		as: "Hikers",
		say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus ipsa sit laudantium incidunt consequatur atque cum nemo fugit quas.",
	},
];

const Review = () => {
	return (
		<section className="review">
			<div className="container">
				<div className="row">
					<div className="col">
						<Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
							{reviewers.map(({ reviewerPict, reviewerName, as, say }, i) => {
								return (
									<div className="review__reviewer pb-5 d-flex flex-column align-items-center" key={i}>
										<div className="review__reviewer__profile">
											<picture className="review__reviewer__profile__picture">
												<img src={reviewerPict} alt="" className="review__reviewer__profile__picture__img" />
											</picture>
										</div>
										<b className="mt-3 review__reviewer__name">{reviewerName}</b>
										<p className="review__reviewer__as">{as}</p>
										<p className="mt-3 review__reviewer__say">{say}</p>
									</div>
								);
							})}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Review;
