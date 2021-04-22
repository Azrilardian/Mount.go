import React, { useEffect } from "react";
import "../../style/css/heading.css";
import onScreenEffect from "../../js/onScreenEffect";

const Heading = ({ backgroundText, whiteText, greenText, questionMark, position }) => {
	useEffect(() => {
		onScreenEffect(".onscreen-element", "onscreen-effect");
	}, []);

	return (
		<div className={`row heading ${position === "right" ? "right" : "left"}`}>
			<h1 className="position-absolute onscreen-element heading__backgroundtext  heading__backgroundtext--left">{backgroundText}</h1>
			<h1 className="position-absolute onscreen-element heading__backgroundtext heading__backgroundtext--right">{backgroundText}</h1>
			<h1 className="text-center position-relative onscreen-element w-100 heading__header">
				{whiteText}
				<span>{greenText}</span> {questionMark === "true" ? "?" : ""}
			</h1>
		</div>
	);
};

export default Heading;
