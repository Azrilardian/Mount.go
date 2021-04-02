import React, { Component } from "react";
import styles from "../../style/css/card-favourites.module.css";
import onScreenEffect from "../../js/onScreenEffect";

class Card extends Component {
	componentDidMount() {
		onScreenEffect(".onscreen-component", styles["onscreen-effect"], "-30px");
	}
	render() {
		const { name, daerah, country, picture, keteranganSingkat } = this.props;
		return (
			<div className={`col-lg-6 col-md-6 col-sm-12 onscreen-component ${styles.card}`}>
				<img src={picture} alt={picture} className="img-fluid" />
				<div
					className={styles.card__container}
					onAnimationEnd={(e) => {
						e.target.classList.add(styles["animation-end"]);
						e.target.classList.remove(styles["animation-start"]);
					}}
					onAnimationStart={(e) => {
						e.target.classList.remove(styles["animation-end"]);
						e.target.classList.add(styles["animation-start"]);
					}}
				>
					<h2 className={styles.card__name}>
						{name} Mount, {daerah}
					</h2>
					<p className={styles.card__country}>{country}</p>
					<p className={styles["card__keterangan-singkat"]}>{keteranganSingkat}</p>
				</div>
			</div>
		);
	}
}

export default Card;
