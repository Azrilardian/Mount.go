import React from "react";
import Jumbotron from "../../components/Home/Jumbotron/Jumbotron";
import Introduction from "../../components/Home/Introduction/Introduction";
import Features from "../../components/Home/Features/Features";
import Benefits from "../../components/Home/Benefits/Benefits";
import Favourites from "../../components/Home/Favourites/Favourites";
import Pricing from "../../components/Home/Pricing/Pricing";
import Contact from "../../components/Home/Contact/Contact";
import Footer from "../../components/Home/Footer/Footer";

const Home = () => {
	return (
		<>
			<Jumbotron></Jumbotron>
			<Introduction></Introduction>
			<Features></Features>
			<Benefits></Benefits>
			<Favourites></Favourites>
			<Pricing></Pricing>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
};

export default Home;
