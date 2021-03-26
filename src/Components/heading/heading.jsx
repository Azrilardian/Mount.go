import React from "react";
import styles from "../../style/css/heading.module.css";

const Heading = (props) => {
	const { backgroundText, whiteText, greenText, questionMark, position } = props;
	return (
		<div className={`row ${styles.heading} ${position === "right" ? styles.right : styles.left}`}>
			<h1 className={`position-absolute ${styles.heading__backgroundtext}  ${styles["heading__backgroundtext--left"]}`}>{backgroundText}</h1>
			<h1 className={`position-absolute ${styles.heading__backgroundtext} ${styles["heading__backgroundtext--right"]}`}>{backgroundText}</h1>
			<h1 className={`text-center position-relative w-100 ${styles.heading__header}`}>
				{whiteText}
				<span>{greenText}</span> {questionMark === "true" ? "?" : ""}
			</h1>
		</div>
	);
};

export default Heading;
