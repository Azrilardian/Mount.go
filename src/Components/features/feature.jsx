import React from "react";
import "../../style/css/feature.css";

const Feature = (props) => {
	const { icon, header, paragraph } = props;
	return (
		<>
			<div className="col-lg-3 col-md-6 col-sm-6 col-12 feature">
				<div className="feature__heading">
					<img src={icon} alt={icon} className="feature__heading__icon" />
					<h5 className="feature__heading__header">{header}</h5>
				</div>
				<p className="feature__paragraph">{paragraph}</p>
			</div>
		</>
	);
};

export default Feature;
