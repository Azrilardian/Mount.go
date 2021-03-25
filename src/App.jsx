import React from "react";
import Jumbotron from "./Components/jumbotron/jumbotron";
import Introduction from "./Components/introduction/introduction";
import Features from "./Components/features/features";
import Benefits from "./Components/benefits/benefits";
import Favourites from "./Components/favourites/favourites";
import Pricing from "./Components/pricing/pricing";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";

const App = () => {
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

export default App;
