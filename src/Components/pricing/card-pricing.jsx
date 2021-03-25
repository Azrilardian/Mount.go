import React from "react";
import Button from "../Button/button";
import styles from "../../style/css/card-pricing.module.css";
import checkIcon from "../../icon/check-solid.svg";

const Card = (props) => {
	const { name, price, benefits } = props;
	return (
		<div className={`col-lg-4 col-md-6 col-sm-12 ${styles.card}`}>
			<div className={styles.card__margin}>
				<span className={styles.card__header}>
					<h3 className={styles.card__name}>{name}</h3>
				</span>
				<h1 className={styles.card__price}>${price}</h1>
				<div className={styles.card__benefits}>
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
