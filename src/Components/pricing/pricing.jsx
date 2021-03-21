import React, { Component } from "react";
import Heading from "./../heading/heading";
import Card from "./card";
import "./../../style/css/pricing.css";

class Pricing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packages: [
				{
					name: "BASIC",
					priceInDollar: "100",
					benefits: [
						`Lorem ipsum dolor sit, amet consectetur adipisicing.`,
						`Lorem ipsum dolor sit amet consectetur.`,
						`Lorem ipsum dolor sit amet consectetur.`,
						`Lorem ipsum dolor sit amet consectetur.`,
					],
				},
				{
					name: "STANDAR",
					priceInDollar: "200",
					benefits: [
						`Lorem ipsum dolor sit, amet consectetur adipisicing.`,
						`Lorem ipsum dolor sit amet consectetur.`,
						`Lorem ipsum dolor sit amet consectetur.`,
						`Lorem ipsum dolor sit amet consectetur.`,
					],
				},
				{
					name: "PREMIUM",
					priceInDollar: "300",
					benefits: [
						`Lorem ipsum dolor sit, amet consectetur adipisicing.`,
						`Lorem ipsum dolor sit amet consectetur.`,
						`Lorem ipsum dolor sit amet consectetur.`,
						`Lorem ipsum dolor sit amet consectetur.`,
					],
				},
			],
		};
	}

	render() {
		return (
			<>
				<section className="pricing">
					<div className="container">
						<Heading backgroundText="PRICE AND PACKAGE ?" whiteText="PRICE AND " greenText="PACKAGE" questionMark="false"></Heading>
						<div className="row">
							{this.state.packages.map((pck) => {
								const { name, priceInDollar, benefits } = pck;
								return <Card name={name} price={priceInDollar} benefits={benefits}></Card>;
							})}
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Pricing;
