import React from "react";
import "../../../style/css/heading-detail.css";

const HeadingDetail = ({ children }) => {
	return (
		<div className="row mb-4">
			<div className="col">
				<h2 className="heading-detail">{children}</h2>
			</div>
		</div>
	);
};

export default HeadingDetail;
