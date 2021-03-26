import React, { Component } from "react";
import Heading from "../heading/heading";
import Card from "./card-favourites";
import styles from "../../style/css/favourites.module.css";

import favouriteOne from "../../img/favourite-one.jpg";
import favouriteTwo from "../../img/favourite-two.jpg";

class Favourites extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favourites: [
				{
					name: "Meru",
					daerah: "Jawa Timur",
					country: "Indonesia",
					picture: favouriteOne,
					keteranganSingkat: `makansana rumahsaya dimana kamu berada saying
                    aku disini ayo kita pergi ke pantai dan bersuka cita disana `,
				},
				{
					name: "Rinjani",
					daerah: "Lombok",
					country: "Indonesia",
					picture: favouriteTwo,
					keteranganSingkat: `makansana rumahsaya dimana kamu berada saying
                    aku disini ayo kita pergi ke pantai dan bersuka cita disana `,
				},
			],
		};
	}

	render() {
		return (
			<section className={styles["favourite-destination"]}>
				<Heading backgroundText="FAV DESTINATION" whiteText="FAV " greenText="DESTINATION" questionMark="false" position="right"></Heading>
				<div className="row">
					{this.state.favourites.map((favourite, index) => {
						const { name, daerah, country, picture, keteranganSingkat } = favourite;
						return <Card name={name} daerah={daerah} country={country} picture={picture} keteranganSingkat={keteranganSingkat} key={index}></Card>;
					})}
				</div>
			</section>
		);
	}
}

export default Favourites;
