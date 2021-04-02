import React, { Component } from "react";
import styles from "../../style/css/card-features.module.css";
import onScreenEffect from "../../js/onScreenEffect";

class Card extends Component {
	componentDidMount() {
		onScreenEffect(".onscreen-element", styles["onscreen-effect"], "-50px");
	}
	render() {
		const { icon, header, paragraph } = this.props;
		return (
			<>
				<div className={`col-lg-3 col-md-6 col-sm-6 col-12 d-flex flex-column justify-content-start ${styles.feature}`}>
					<div className={`onscreen-element ${styles.margin}`}>
						<div className={`d-flex align-items-center mb-2 ${styles.feature__heading}`}>
							<img src={icon} alt={icon} className={styles.feature__heading__icon} />
							<h5 className={`my-0 ml-2 ${styles.feature__heading__header}`}>{header}</h5>
						</div>
						<p className={styles.feature__paragraph}>{paragraph}</p>
					</div>
				</div>
			</>
		);
	}
}

export default Card;
