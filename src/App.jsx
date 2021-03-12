import React from "react";
import Jumbotron from "./Components/jumbotron/jumbotron";
import Introduction from "./Components/introduction/introduction";
import Features from "./Components/features/features";

const App = () => {
	return (
		<>
			<Jumbotron></Jumbotron>
			<Introduction></Introduction>
			<Features></Features>
		</>
	);
};

export default App;
