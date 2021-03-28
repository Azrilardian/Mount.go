import React from "react";
import styles from "../../style/css/card-favourites.module.css";

const Card = (props) => {
	const { name, daerah, country, picture, keteranganSingkat } = props;
	return (
		<div className={`col-lg-6 col-md-6 col-sm-12 ${styles.card}`}>
			<img src={picture} alt={picture} className="img-fluid" />
			<div className={styles.card__container}>
				<h2 className={styles.card__name}>
					{name} Mount, {daerah}
				</h2>
				<p className={styles.card__country}>{country}</p>
				<p className={styles["card__keterangan-singkat"]}>{keteranganSingkat}</p>
			</div>
		</div>
	);
};

export default Card;
