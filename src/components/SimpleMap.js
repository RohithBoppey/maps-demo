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
        dataUsage: 300
    }
]


const colorScaler = (value) => {
    // Assuming value ranges from 0 to 7500
    const scaler = chroma.scale(['#03fcdf', '#037bfc']).domain([0, 1000]);
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
                            setCountryStats(`${dataUsage}TB`);
                        }} >
                            <circle r={5} fill={`${colorScaler(dataUsage)}`} stroke={`${chroma(colorScaler(dataUsage).darken(1.75))}`}/>
                        </Marker>
                    ))
                }
			</ZoomableGroup>
		</ComposableMap>
		</>
	);
};

export default SimpleMap;
