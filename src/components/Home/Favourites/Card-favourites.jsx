import React, { useEffect } from "react";
import onScreenEffect from "../../../js/onScreenEffect";
import "../../../style/css/card-favourites.css";

const Card = ({ name, daerah, country, picture, pictureCompress, keteranganSingkat }) => {
	useEffect(() => {
		onScreenEffect(".onscreen-component", "onscreen-effect", "-30px");
	}, []);

	return (
		<div className="col-lg-6 col-md-6 col-sm-12 onscreen-component card">
			<img src={pictureCompress} data-src={picture} alt={picture} className="lazy-load" />
			<div
				className="card__container"
				onAnimationEnd={(e) => {
					e.target.classList.add("animation-end");
					e.target.classList.remove("animation-start");
				}}
				onAnimationStart={(e) => {
					e.target.classList.remove("animation-end");
					e.target.classList.add("animation-start");
				}}
			>
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
