import React, { useEffect } from "react";
import Heading from "../../Utility/Heading/Heading";
import Card from "./Card-favourites";
import favouriteOneCompress from "../../../assets/img/over-compress/favourite-one.webp";
import favouriteTwoCompress from "../../../assets/img/over-compress/favourite-two.webp";
import favouriteOne from "../../../assets/img/favourite-one.webp";
import favouriteTwo from "../../../assets/img/favourite-two.webp";
import lazyLoadEffect from "../../../js/lazyLoadEffect";
import "../../../style/css/favourites.css";

const Favourites = () => {
	useEffect(() => {
		lazyLoadEffect();
	}, []);

	const favourites = [
		{
			name: "Meru",
			daerah: "Jawa Timur",
			country: "Indonesia",
			picture: favouriteOne,
			pictureCompress: favouriteOneCompress,
			keteranganSingkat: `makansana rumahsaya dimana kamu berada saying
                    aku disini ayo kita pergi ke pantai dan bersuka cita disana `,
		},
		{
			name: "Rinjani",
			daerah: "Lombok",
			country: "Indonesia",
			picture: favouriteTwo,
			pictureCompress: favouriteTwoCompress,
			keteranganSingkat: `makansana rumahsaya dimana kamu berada saying
                    aku disini ayo kita pergi ke pantai dan bersuka cita disana `,
		},
	];
	return (
		<section className="position-relative favourite-destination">
			<Heading backgroundText="FAV DESTINATION" whiteText="FAV " greenText="DESTINATION" questionMark="false" position="right"></Heading>
			<div className="row m-0 p-0 w-100">
				{favourites.map((favourite, index) => {
					const { name, daerah, country, picture, pictureCompress, keteranganSingkat } = favourite;
					return <Card name={name} daerah={daerah} country={country} picture={picture} pictureCompress={pictureCompress} keteranganSingkat={keteranganSingkat} key={index}></Card>;
				})}
			</div>
		</section>
	);
};

export default Favourites;
