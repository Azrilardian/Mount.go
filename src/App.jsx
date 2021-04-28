import React from "react";
import Navbar from "./components/Utility/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailPages from "./pages/DetailPages/DetailPages";
import AllMountPages from "./pages/AllMountPages/AllmountPages";

const App = () => {
	return (
		<Router>
			<Navbar></Navbar>
			<Switch>
				<Route path="/" component={Home} exact></Route>
				<Route path="/detail" component={DetailPages}></Route>
				<Route path="/allmount" component={AllMountPages}></Route>
			</Switch>
		</Router>
	);
};

export default App;
