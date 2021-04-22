import React from "react";
import "../../style/css/button.css";

const Button = ({ color = "blue", children }) => {
	return <button className={`text-white default-btn ${color}`}>{children}</button>;
};

export default Button;
