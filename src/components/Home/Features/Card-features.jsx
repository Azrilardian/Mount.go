import React, { useEffect } from "react";
import onScreenEffect from "../../../js/onScreenEffect";
import "../../../style/css/card-features.css";

const Card = ({ icon, header, paragraph }) => {
	useEffect(() => {
		onScreenEffect(".onscreen-element", "onscreen-effect", "-50px");
	}, []);

	return (
		<>
			<div className="col-lg-3 col-md-6 col-sm-6 col-12 d-flex flex-column justify-content-start feature">
				<div className="onscreen-element feature__margin">
					<div className="d-flex align-items-center mb-2 feature__heading">
						<img src={icon} alt={icon} className="feature__heading__icon" />
						<h5 className="my-0 ml-2 feature__heading__header">{header}</h5>
					</div>
					<p className="feature__paragraph">{paragraph}</p>
				</div>
			</div>
		</>
	);
};

export default Card;
