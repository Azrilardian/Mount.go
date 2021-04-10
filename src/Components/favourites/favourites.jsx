import React, { useEffect } from "react";
import Heading from "../heading/heading";
import Card from "./card-favourites";
import styles from "../../style/css/favourites.module.css";
import favouriteOneCompress from "../../img/over-compress/favourite-one.webp";
import favouriteTwoCompress from "../../img/over-compress/favourite-two.webp";
import favouriteOne from "../../img/favourite-one.webp";
import favouriteTwo from "../../img/favourite-two.webp";
import lazyLoadEffect from "../../js/lazyLoadEffect";

const Favourites = () => {
	useEffect(() => {
		lazyLoadEffect();
	});
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
		<section className={`position-relative ${styles["favourite-destination"]}`}>
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
