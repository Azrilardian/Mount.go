import React, { useEffect } from "react";
import Button from "../../Utility/Button/Button";
import checkIcon from "../../../assets/icon/check-solid.svg";
import onsSreenEffect from "../../../js/onScreenEffect";
import "../../../style/css/card-pricing.css";

const Card = ({ name, price, benefits }) => {
	useEffect(() => {
		onsSreenEffect(".onscreen-element", "onscreen-effect", "-30px");
	}, []);

	return (
		<div className="col-lg-4 col-md-6 col-sm-12 pricing-card">
			<div className="overflow-hidden onscreen-element pricing-card__margin">
				<span className="d-flex justify-content-center align-items-center pricing-card__header">
					<h3 className="m-0 pricing-card__name">{name}</h3>
				</span>
				<h1 className="position-relative text-center my-4 pricing-card__price">{price}</h1>
				<div className="d-flex flex-column justify-content-center align-items-start pricing-card__benefits">
					{benefits.map((benefit, index) => (
						<span className="d-flex align-items-start" key={index}>
							<img src={checkIcon} alt="check-solid.svg" />
							<p>{benefit}</p>
						</span>
					))}
				</div>
				<div className="row mx-0 justify-content-center mb-5 mt-4">
					<Button color="green">I WANT</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
