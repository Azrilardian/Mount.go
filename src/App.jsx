import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailPages from "./pages/DetailPages/DetailPages";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact></Route>
				<Route path="/detail" component={DetailPages} exact></Route>
			</Switch>
		</Router>
		// <DetailPages></DetailPages>
	);
};

export default App;
