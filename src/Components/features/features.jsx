import React from "react";
import Heading from "../heading/heading";
import Button from "../Button/button";
import Card from "./card-features";
import timeIcon from "../../icon/lnr-hourglass.png";
import LicenseIcon from "../../icon/lnr-license.png";
import bubbleIcon from "../../icon/lnr-bubble.png";
import smileIcon from "../../icon/lnr-smile.png";
import "../../style/css/features.css";

const Features = () => {
	const features = [
		{
			icon: timeIcon,
			header: "On Time",
			paragraph: `makansana rumahsaya dimana kamu berada saying aku disini ayo kita pergi ke pantai dan bersuka cita  disana hah saying aku disini ayo kita pergi lreom ke pantai dan bersuka cita disana.`,
		},
		{
			icon: LicenseIcon,
			header: "Terkreditasi",
			paragraph: `makansana rumahsaya dimana kam berada saying aku disini ayo kita pergi ke pantai dan bersuka cita na haha saying aku disini ayo.`,
		},
		{
			icon: bubbleIcon,
			header: "Translator",
			paragraph: `makansana rumahsaya dimana kam berada saying aku disini ayo kita pergi ke pantai dan bersuka disana hah saying aku disini ayo kita pergi lorem ke pantai dan cita disana.`,
		},
		{
			icon: smileIcon,
			header: "Tanggap",
			paragraph: `makansana rumahsaya dimana kamu berada saying aku disini ayo kita ergi ke pantai dan bersuka cita  disana hah saying aku disini ayo pergi lreom ke p maksn.`,
		},
	];

	return (
		<section className="position-relative features">
			<div className="container">
				<Heading backgroundText="WHY CHOOSE US ?" whiteText="WHY CHOOSE " greenText="US" questionMark="true" position="right"></Heading>
				<div className="row">
					{features.map((feature, index) => {
						const { icon, header, paragraph } = feature;
						return <Card icon={icon} header={header} paragraph={paragraph} key={index}></Card>;
					})}
				</div>
				<div className="row justify-content-center mt-5 pt-4">
					<Button>CONTACT US</Button>
				</div>
			</div>
		</section>
	);
};

export default Features;
