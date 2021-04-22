import React from "react";
import "../../style/css/input-contact.css";

const Input = ({ height, children }) => {
	return (
		<div className="form__input-container">
			<p className="form__input-container__paragraph">{children}</p>
			<input type="text" className="form__input-container__input" style={{ height: `${height}px` }} />
		</div>
	);
};

export default Input;
