import React, { Component } from "react";
import styles from "../../style/css/card-benefit.module.css";
import onScreenEffect from "../../js/onScreenEffect";

class Benefit extends Component {
	componentDidMount() {
		onScreenEffect(".onscreen-element", styles["onscreen-effect"], "-30px");
	}

	render() {
		const { header, paragraph } = this.props;
		return (
			<div className={`col-lg-4 col-md-6 col-sm-6 col-12 m-0 ${styles.benefit}`}>
				<div className={`position-relative overflow-hidden onscreen-element text-center ${styles.benefit__margin}`}>
					<h5 className={`m-0 ${styles.benefit__margin__header}`}>{header}</h5>
					<p className={`m-0 ${styles.benefit__margin__paragraph}`}>{paragraph}</p>
				</div>
			</div>
		);
	}
}

export default Benefit;
