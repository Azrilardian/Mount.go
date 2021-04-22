import React from "react";
import Heading from "../heading/heading";
import Card from "./card-pricing";
import "../../style/css/pricing.css";

const Pricing = () => {
	const packages = [
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
	];

	return (
		<>
			<section className="position-relative pricing">
				<div className="container">
					<Heading backgroundText="PRICE AND PACKAGE ?" whiteText="PRICE AND " greenText="PACKAGE" questionMark="false" position="left"></Heading>
					<div className="row">
						{packages.map((pck, index) => {
							const { name, priceInDollar, benefits } = pck;
							return <Card name={name} price={priceInDollar} benefits={benefits} key={index}></Card>;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Pricing;
