import React from "react";
import HeadingDetail from "../../Utility/HeadingDetail/HeadingDetail";
import ContentTabel from "./ContentTabel";
import "../../../style/css/detail.css";

const Detail = () => {
	return (
		<section className="detail">
			<div className="container">
				<HeadingDetail>Detail</HeadingDetail>
				<ContentTabel></ContentTabel>
			</div>
		</section>
	);
};

export default Detail;
