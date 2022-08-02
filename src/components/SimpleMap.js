import React, { useState } from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	ZoomableGroup,
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";
import chroma from "chroma-js";

import '../App.css'

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
        name: "India",
        coordinates: [-122.431297, 37.773972],
        dataUsage: 575
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
        name: "Mali",
        coordinates: [-3.9861,  17.5739],
        dataUsage: 627
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
    
]


const colorScaler = (value) => {
    // Assuming value ranges from 0 to 7500
    const scaler = chroma.scale(['#03fcf8', '#4503fc']).domain([0, 800]);
    return scaler(value);
}

const SimpleMap = () => {
    

    const [countryStats, setCountryStats] = useState("")

	return (
            <>
            <ReactTooltip>{countryStats}</ReactTooltip>
            <ComposableMap data-tip="" height={250} width={1000} >
			<ZoomableGroup zoom={1}>
				<Geographies
					geography="/map-features.json"
					fill="#D6D6DA"
					stroke="#FFFFFF"
					strokeWidth={0.5}>
					{({ geographies }) =>
						geographies.map((geo) => (
							<Geography key={geo.rsmKey} geography={geo} 
                            onMouseEnter = {() => {
                                const {name} = geo.properties;
                                setCountryStats(`${name}`);
                            }} 
                            onMouseLeave = {() => {
                                setCountryStats("");
                            }}
                            style = {{
                                hover: {
                                    fill: "#F53",
                                    outline: "none"
                                }
                            }}
                            />
						))
					}
				</Geographies>

                {
                    markers.map(({name, coordinates, offset, dataUsage}) => (
                        <Marker key={name} coordinates={coordinates} onClick= {() => {
                            setCountryStats(`Data Usage: ${dataUsage}TB`);
                        }} >
                            <circle r={dataUsage/100} fill={`${colorScaler(dataUsage)}`} stroke={`${chroma(colorScaler(dataUsage).darken(3))}`}/>
                        </Marker>
                    ))
                }
			</ZoomableGroup>
		</ComposableMap>
		</>
	);
};

export default SimpleMap;
