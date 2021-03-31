import React from "react";
import Button from "../Button/button";
import styles from "../../style/css/card-pricing.module.css";
import checkIcon from "../../icon/check-solid.svg";

const Card = (props) => {
	const { name, price, benefits } = props;
	return (
		<div className={`col-lg-4 col-md-6 col-sm-12 ${styles.card}`}>
			<div className={`overflow-hidden ${styles.card__margin}`}>
				<span className={`d-flex justify-content-center align-items-center ${styles.card__header}`}>
					<h3 className={`m-0 ${styles.card__name}`}>{name}</h3>
				</span>
				<h1 className={`position-relative text-center my-4 ${styles.card__price}`}>${price}</h1>
				<div className={`d-flex flex-column justify-content-center align-items-start ${styles.card__benefits}`}>
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
