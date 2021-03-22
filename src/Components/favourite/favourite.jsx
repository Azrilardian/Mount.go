import React, { Component } from "react";
import Heading from "../heading/heading";
import Card from "./card";
// import "../../style/css/favourite.css";

class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favourites: [
				{
					name: "Meru",
					daerah: "Lombok",
					country: "Indonesia",
					picture: "../../img/favourite-one.jpg",
					keteranganSingkat: `makansana rumahsaya dimana kamu berada saying
                    aku disini ayo kita ergi ke pantai dan bersuka cita  disana `,
				},
				{
					name: "Meru",
					daerah: "Lombok",
					country: "Indonesia",
					picture: "../../img/favourite-two.jpg",
					keteranganSingkat: `makansana rumahsaya dimana kamu berada saying
                    aku disini ayo kita ergi ke pantai dan bersuka cita  disana `,
				},
			],
		};
	}

	render() {
		return (
			<section className="favourite-destination">
				<Heading backgroundText="FAV DESTINATION" whiteText="FAV " greenText="DESTINATION" questionMark="false"></Heading>
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

export default Favourite;
