import React from "react";
import "../../style/css/heading.css";

const Heading = (props) => {
	const { backgroundText, whiteText, greenText, questionMark } = props;
	return (
		<div className="row heading">
			<h1 className="heading__backgroundtext heading__backgroundtext--left">{backgroundText}</h1>
			<h1 className="heading__backgroundtext heading__backgroundtext--right">{backgroundText}</h1>
			<h1 className="heading__header text-center">
				{whiteText}
				<span>{greenText}</span> {questionMark === "true" ? "?" : ""}
			</h1>
		</div>
	);
};

export default Heading;
