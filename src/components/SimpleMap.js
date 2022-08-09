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


const colorScaler = (value) => {
    // Assuming value ranges from 0 to to maximum value.
    const scaler = chroma.scale(['#03fcf8', '#4503fc']).domain([0, 800]);
    return scaler(value);
}

const SimpleMap = (props) => {
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
                    props.markers.map(({name, coordinates, offset, dataUsage}) => (
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
