import React, { useEffect } from "react";
import "../../style/css/card-benefit.css";
import onScreenEffect from "../../js/onScreenEffect";

const Benefit = ({ header, paragraph }) => {
	useEffect(() => {
		onScreenEffect(".onscreen-element", "onscreen-effect", "-30px");
	}, []);

	return (
		<div className="col-lg-4 col-md-6 col-sm-6 col-12 m-0 benefit">
			<div className="position-relative overflow-hidden onscreen-element text-center benefit__margin">
				<h5 className="m-0 benefit__margin__header">{header}</h5>
				<p className="m-0 benefit__margin__paragraph">{paragraph}</p>
			</div>
		</div>
	);
};

export default Benefit;
