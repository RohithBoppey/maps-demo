import React from "react";
import SimpleMap from "./components/SimpleMap";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<h1><a href="https://github.com/RohithBoppey/maps-demo" target='__blank'>Interactive Map using React</a></h1>
			<p>Find your country's usage by clicking on the country.</p>
			<SimpleMap />
			<h3>Created by <a href="https://github.com/RohithBoppey/maps-demo" target='__blank'>Rohith Boppey</a></h3>
		</div>
	);
};

export default App;
