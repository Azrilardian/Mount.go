import React from "react";
import "../../style/css/button.css";

const Button = (props) => {
	let color = "blue";
	if (props.color === "green") color = "green";
	return <button className={`defaultbtn ${color}`}>{props.children}</button>;
};

export default Button;
