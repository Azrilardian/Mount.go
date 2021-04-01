import React, { Component } from "react";
import styles from "../../style/css/heading.module.css";
import onScreenEffect from "../../js/onScreenEffect";

class Heading extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		onScreenEffect(".onscreen-element", styles["onscreen-effect"]);
	}

	render() {
		const { backgroundText, whiteText, greenText, questionMark, position } = this.props;
		return (
			<div className={`row ${styles.heading} ${position === "right" ? styles.right : styles.left}`}>
				<h1 className={`position-absolute onscreen-element ${styles.heading__backgroundtext}  ${styles["heading__backgroundtext--left"]}`}>{backgroundText}</h1>
				<h1 className={`position-absolute onscreen-element ${styles.heading__backgroundtext} ${styles["heading__backgroundtext--right"]}`}>{backgroundText}</h1>
				<h1 className={`text-center position-relative onscreen-element w-100 ${styles.heading__header}`}>
					{whiteText}
					<span>{greenText}</span> {questionMark === "true" ? "?" : ""}
				</h1>
			</div>
		);
	}
}

export default Heading;
