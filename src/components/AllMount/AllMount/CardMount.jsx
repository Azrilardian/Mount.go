import React from "react";
import "../../../style/css/card-mount.css";

const CardMount = ({ name, location, description, picture, imgRight }) => {
	return (
		<div className={`card-mount mb-5 ${imgRight ? "card-mount--img-right" : ""}`}>
			<div className="d-flex justify-content-between align-items-center card-mount__smallest">
				<picture className="card-mount__smallest__picture" load="lazy" decoder="async">
					<img src={picture} alt="mount-pict" className="card-mount__smallest__picture__img" />
				</picture>
				<div className="card-mount__smallest__information">
					<p className="card-mount__smallest__information__name m-0">
						{name}, {location}
					</p>
					<h2 className="card-mount__smallest__information__description-title">Description</h2>
					<p className="card-mount__smallest__information__description">{description}</p>
					<div className="d-flex align-items-center card-mount__smallest__information__button-container">
						<button className="text-white card-mount__smallest__information__button-container__detail-button">DETAIL</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardMount;
