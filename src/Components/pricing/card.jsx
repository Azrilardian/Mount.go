import React from "react";
import Button from "../Button/button";
// import style from "../../style/css/card-pricing.css";
import checkIcon from "../../icon/check-solid.svg";

const Card = (props) => {
	const { name, price, benefits } = props;
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 card">
			<div className="card__margin">
				<span className="card__header">
					<h3 className="card__name">{name}</h3>
				</span>
				<h1 className="card__price">${price}</h1>
				<div className="card__benefits">
					{benefits.map((benefit) => (
						<span>
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
