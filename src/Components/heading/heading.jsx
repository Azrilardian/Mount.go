import React from "react";
import styles from "../../style/css/heading.module.css";

const Heading = (props) => {
	const { backgroundText, whiteText, greenText, questionMark } = props;
	return (
		<div className={`row ${styles.heading}`}>
			<h1 className={`${styles.heading__backgroundtext}  ${styles["heading__backgroundtext--left"]}`}>{backgroundText}</h1>
			<h1 className={`${styles.heading__backgroundtext} ${styles["heading__backgroundtext--right"]}`}>{backgroundText}</h1>
			<h1 className={`${styles.heading__header} text-center`}>
				{whiteText}
				<span>{greenText}</span> {questionMark === "true" ? "?" : ""}
			</h1>
		</div>
	);
};

export default Heading;
