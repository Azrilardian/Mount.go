import React from "react";
import Jumbotron from "./Components/jumbotron/jumbotron";
import Introduction from "./Components/introduction/introduction";
import Features from "./Components/features/features";
import Benefits from "./Components/benefits/benefits";
import Favourite from "./Components/favourite/favourite";
import Pricing from "./Components/pricing/pricing";

const App = () => {
	return (
		<>
			<Jumbotron></Jumbotron>
			<Introduction></Introduction>
			<Features></Features>
			<Benefits></Benefits>
			<Favourite></Favourite>
			<Pricing></Pricing>
		</>
	);
};

export default App;
