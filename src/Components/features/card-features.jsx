import React from "react";
import styles from "../../style/css/card-features.module.css";

const Card = (props) => {
	const { icon, header, paragraph } = props;
	return (
		<>
			<div className="col-lg-3 col-md-6 col-sm-6 col-12 feature">
				<div className={styles.feature__heading}>
					<img src={icon} alt={icon} className={styles.feature__heading__icon} />
					<h5 className={styles.feature__heading__header}>{header}</h5>
				</div>
				<p className={styles.feature__paragraph}>{paragraph}</p>
			</div>
		</>
	);
};

export default Card;
