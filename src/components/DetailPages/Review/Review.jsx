import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgProfilOne from "../../../assets/img/review-pict-1.jpg";
import "../../../style/css/review.css";

const reviewers = [
	{
		reviewerPict: imgProfilOne,
		reviewerName: "Azril Ardian Ifansyah",
		as: "Hikers",
		say:
			"makansana rumahsaya dimana kam berada saying aku disini ayo kita pergi ke pantai dan bersuka cita  disana hah saying aku disini ayo kita pergilreom ke pantai dan pergi kemanapun yang kita mau",
	},
	{
		reviewerPict: imgProfilOne,
		reviewerName: "Azril Ardian Ifansyah",
		as: "Hikers",
		say:
			"makansana rumahsaya dimana kam berada saying aku disini ayo kita pergi ke pantai dan bersuka cita  disana hah saying aku disini ayo kita pergilreom ke pantai dan pergi kemanapun yang kita mau",
	},
];

const Review = () => {
	return (
		<section className="review">
			<div className="container">
				<div className="row">
					<div className="col">
						<Carousel>
							{reviewers.map(({ reviewerPict, reviewerName, as, say }) => {
								return (
									<div className="review__reviewer pb-5 d-flex flex-column align-items-center">
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
