import React from "react";
import SimpleMap from "./components/SimpleMap";
import SimpleChart from "./components/SimpleChart";

import "./App.css";
const markers = [
    // Longitude and Lalitude
    {
        markerOffset: '-15',
        name: "San Paulo",
        coordinates: [-58.3816, -34.6037],
        dataUsage: 500
    },
    {
        markerOffset: '15',
        name: "India",
        coordinates: [78.962883, 20.593683],
        dataUsage: 700
    },
    {
        markerOffset: '15',
        name: "Edwardsville",
        coordinates: [-89.953157, 38.811436],
        dataUsage: 215
    },
    {
        markerOffset: '15',
        name: "China",
        coordinates: [103.0000,  35.0000],
        dataUsage: 750
    },
    {
        markerOffset: '15',
        name: "Beijing",
        coordinates: [116.383331,  39.916668],
        dataUsage: 412
    },
    {
        markerOffset: '15',
        name: "Russia",
        coordinates: [105.318,  61.5240],
        dataUsage: 780
    },
    {
        markerOffset: '15',
        name: "Sudan",
        coordinates: [30.2176,  12.8628],
        dataUsage: 165
    },
    {
        markerOffset: '15',
        name: "Egypt",
        coordinates: [31.233334,  30.033333],
        dataUsage: 290
    },
    {
        markerOffset: '15',
        name: "Tanzania",
        coordinates: [34.8888,  6.3690],
        dataUsage: 356
    },
    {
        markerOffset: '15',
        name: "Mali",
        coordinates: [-3.9861,  17.5739],
        dataUsage: 415
    },
    {
        markerOffset: '15',
        name: "Brazil",
        coordinates: [51.9253,  14.2350],
        dataUsage: 415
    },
    {
        markerOffset: '15',
        name: "Ukraine",
        coordinates: [31.1656,  48.3794],
        dataUsage: 219
    },
    {
        markerOffset: '15',
        name: "Austraila",
        coordinates: [133.7751,  25.2744],
        dataUsage: 250
    },
    {
        markerOffset: '15',
        name: "Bangalore",
        coordinates: [77.580643,  12.972442],
        dataUsage: 375
    },
    {
        markerOffset: '15',
        name: "Pakistan",
        coordinates: [69.3451,  30.3753],
        dataUsage: 275
    },
    {
        markerOffset: '15',
        name: "Myanmar",
        coordinates: [95.9560,  21.9162],
        dataUsage: 175
    },
    {
        markerOffset: '15',
        name: "Botswana",
        coordinates: [22.3285, 24.6849],
        dataUsage: 179
    },
    {
        markerOffset: '15',
        name: "Kazakhstan",
        coordinates: [66.9237,  48.0196],
        dataUsage: 198
    },
    {
        markerOffset: '15',
        name: "Congo",
        coordinates: [21.7587,  4.0383],
        dataUsage: 475
    },
    {
        markerOffset: '15',
        name: "South Africa",
        coordinates: [22.9375,  30.5595],
        dataUsage: 475
    },
    {
        markerOffset: '15',
        name: "Canada",
        coordinates: [106.3468,  56.1304],
        dataUsage: 475
    },
]

const App = () => {
	return (
		<div className="App">
			<h1><a href="https://github.com/RohithBoppey/maps-demo" target='__blank'>Interactive Map using React</a></h1>
			<p>Find your country's usage by clicking on the country.</p>
			<SimpleMap markers = {markers}/>
			<SimpleChart data = {markers}/>
			<h3>Created by <a href="https://github.com/RohithBoppey/maps-demo" target='__blank'>Rohith Boppey</a></h3>
		</div>
	);
};

export default App;
