import React, { Component } from "react";
import Feature from "./feature";
import Heading from "../heading/heading";
import Button from "../Button/button";
import "../../style/css/features.css";

import timeIcon from "../../icon/lnr-hourglass.svg";
import LicenseIcon from "../../icon/lnr-license.svg";
import bubbleIcon from "../../icon/lnr-bubble.svg";
import smileIcon from "../../icon/lnr-smile.svg";

class Features extends Component {
	constructor(props) {
		super(props);
		this.state = {
			features: [
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
			],
		};
	}

	render() {
		return (
			<section className="features">
				<div className="container">
					<Heading backgroundText="WHY CHOOSE US ?" whiteText="WHY CHOOSE " greenText="US" questionMark="true"></Heading>
					<div className="row">
						{this.state.features.map((feature, index) => {
							const { icon, header, paragraph } = feature;
							return <Feature icon={icon} header={header} paragraph={paragraph} key={index}></Feature>;
						})}
					</div>
					<div className="row justify-content-center">
						<Button>CONTACT US</Button>
					</div>
				</div>
			</section>
		);
	}
}

export default Features;
