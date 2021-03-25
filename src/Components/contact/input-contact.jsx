import React from "react";
import styles from "../../style/css/input-contact.module.css";

const Input = (props) => {
	return (
		<div className={styles["form__input-container"]}>
			<p className={styles["form__input-container__paragraph"]}>{props.children}</p>
			<input type="text" className={styles["form__input-container__input"]} style={{ height: `${props.height}px` }} />
		</div>
	);
};

export default Input;
