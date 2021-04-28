import React from "react";
import HeadingDetail from "../../Utility/HeadingDetail/HeadingDetail";
import pictOne from "../../../assets/img/favourite-one.webp";
import pictTwo from "../../../assets/img/jumbotron-pict-2.webp";
import pictThree from "../../../assets/img/picture-3.jpg";
import pictFour from "../../../assets/img/bg-contact.webp";
import pictFive from "../../../assets/img/jumbotron-pict-1.webp";
import pictSix from "../../../assets/img/favourite-two.webp";
import CardMount from "./CardMount";
import "../../../style/css/all-mount.css";

const mounts = [
	{
		name: "Rinjani Mount",
		location: "Lombok",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maiores ullam unde. Modi corporis iure aspernatur! Rerum provident inventore harum sunt molestias possimus iusto assumenda, accusantium autem, maxime cumque quo earum ducimus suscipit facilis voluptates. Neque veniam quasi similique tempore.",
		picture: pictOne,
	},
	{
		name: "Rinjani Mount",
		location: "Lombok",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maiores ullam unde. Modi corporis iure aspernatur! Rerum provident inventore harum sunt molestias possimus iusto assumenda, accusantium autem, maxime cumque quo earum ducimus suscipit facilis voluptates. Neque veniam quasi similique tempore.",
		picture: pictTwo,
	},
	{
		name: "Rinjani Mount",
		location: "Lombok",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maiores ullam unde. Modi corporis iure aspernatur! Rerum provident inventore harum sunt molestias possimus iusto assumenda, accusantium autem, maxime cumque quo earum ducimus suscipit facilis voluptates. Neque veniam quasi similique tempore.",
		picture: pictThree,
	},
	{
		name: "Rinjani Mount",
		location: "Lombok",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maiores ullam unde. Modi corporis iure aspernatur! Rerum provident inventore harum sunt molestias possimus iusto assumenda, accusantium autem, maxime cumque quo earum ducimus suscipit facilis voluptates. Neque veniam quasi similique tempore.",
		picture: pictFour,
	},
	{
		name: "Rinjani Mount",
		location: "Lombok",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maiores ullam unde. Modi corporis iure aspernatur! Rerum provident inventore harum sunt molestias possimus iusto assumenda, accusantium autem, maxime cumque quo earum ducimus suscipit facilis voluptates. Neque veniam quasi similique tempore.",
		picture: pictFive,
	},
	{
		name: "Rinjani Mount",
		location: "Lombok",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maiores ullam unde. Modi corporis iure aspernatur! Rerum provident inventore harum sunt molestias possimus iusto assumenda, accusantium autem, maxime cumque quo earum ducimus suscipit facilis voluptates. Neque veniam quasi similique tempore.",
		picture: pictSix,
	},
];

const AllMount = () => {
	return (
		<section className="all-mount">
			<div className="container">
				<HeadingDetail>All Mount</HeadingDetail>
				<div className="row">
					{mounts.map(({ name: mountName, location, description, picture }, i) => {
						if (i % 2 === 0) return <CardMount name={mountName} location={location} description={description} picture={picture} key={i} imgRight></CardMount>;
						return <CardMount name={mountName} location={location} description={description} picture={picture} key={i}></CardMount>;
					})}
				</div>
			</div>
		</section>
	);
};

export default AllMount;
