import React from "react";
import Benefit from "./card-benefit";
import Heading from "../heading/heading";
import Button from "../Button/button";
import "../../style/css/benefits.css";

const Benefits = () => {
	const benefits = [
		{
			header: "Lorem Ipsum Donor",
			paragraph: `makansana rumahsaya dimana kamu berada saying aku disini ayo kita Pergi ke pantai dan bersuka cita  disana hah. aku disini makan kamu kenapa gitu.`,
		},
		{
			header: "Lorem Ipsum Donor",
			paragraph: `makansana rumahsaya dimana kamu berada saying aku disini ayo kita Pergi ke pantai dan bersuka cita  disana hah. aku disini ada kamu menemani.`,
		},
		{
			header: "Lorem Ipsum Donor",
			paragraph: `makansana rumahsaya dimana kamu berada saying aku disini ayo kita Pergi ke pantai dan bersuka cita  disana hah. aku disini lah memangnya kenapa.`,
		},
	];

	return (
		<section className="position-relative benefits">
			<div className="container">
				<Heading backgroundText="WHAT YOU GET ?" whiteText="WHAT YOU " greenText="GET" questionMark="true" position="left"></Heading>
				<div className="row">
					{benefits.map((benefit, index) => {
						const { icon, header, paragraph } = benefit;
						return <Benefit icon={icon} header={header} paragraph={paragraph} key={index}></Benefit>;
					})}
				</div>
				<div className="row justify-content-center mt-5 pt-4">
					<Button>SEE MORE</Button>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
