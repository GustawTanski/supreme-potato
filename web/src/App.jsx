import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import "./global.module.css";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route to="/" component={LoginView} />
			</Switch>
		</HashRouter>
	);
}
