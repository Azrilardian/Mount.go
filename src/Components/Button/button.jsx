import React from "react";
import "../../style/css/button.css";

const Button = (props) => {
	let color = "blue";
	if (props.color === "green") color = "green";
	return <button className={`defaultbtn ${color}`}>{props.text}</button>;
};

export default Button;
