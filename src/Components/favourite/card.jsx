import React from "react";
import "../../style/css/favourite-card.css";

const Card = (props) => {
	const { name, daerah, country, picture, keteranganSingkat } = props;

	// const background = {
	// 	backgroundImage: `url(${picture})`,
	// };

	return (
		<div className="col-lg-6 col-md-6 col-sm-12 card">
			<span className="card__overlay"></span>
			<div className="card__container">
				<h2 className="card__name">
					{name} Mount, {daerah}
				</h2>
				<p className="card__country">{country}</p>
				<p className="card__keterangan-singkat">{keteranganSingkat}</p>
			</div>
		</div>
	);
};

export default Card;
