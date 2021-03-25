import React from "react";
import styles from "../../style/css/button.module.css";

const Button = (props) => {
	let color = `${styles.blue}`;
	if (props.color === "green") color = `${styles.green}`;
	return <button className={`${styles.defaultbtn} ${color}`}>{props.children}</button>;
};

export default Button;
