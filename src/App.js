import React from "react";
import SimpleMap from "./components/SimpleMap";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<h1>Interactive Map using React</h1>
			<p>Find your country's usage by clicking on the country.</p>
				<SimpleMap />
		</div>
	);
};

export default App;
