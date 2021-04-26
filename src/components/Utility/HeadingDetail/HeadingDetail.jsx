import React, { useEffect } from "react";
import onScreenEffect from "../../../js/onScreenEffect";
import "../../../style/css/heading-detail.css";

const HeadingDetail = ({ children }) => {
	useEffect(() => {
		onScreenEffect(".onscreen-element", "onscreen-effect", "-60px");
	}, []);

	return (
		<div className="row mb-4">
			<div className="col">
				<h2 className="heading-detail onscreen-element">{children}</h2>
			</div>
		</div>
	);
};

export default HeadingDetail;
