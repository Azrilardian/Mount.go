import React from "react";
import "../../style/css/benefit.css";

const Benefit = (props) => {
	const { icon, header, paragraph } = props;
	return (
		<div className="col-lg-4 col-md-4 col-sm-6 col-12 benefit">
			<div className="benefit__margin">
				<img src={icon} alt={icon} className="benefit__margin__icon" />
				<h5 className="benefit__margin__header">{header}</h5>
				<p className="benefit__margin__paragraph">{paragraph}</p>
			</div>
		</div>
	);
};

export default Benefit;
