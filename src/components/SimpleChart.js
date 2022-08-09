import React from "react";
import { Bar } from "react-chartjs-2";

/* eslint-disable no-unused-vars */
import { Chart } from "chart.js/auto"; 

const SimpleChart = (props) => {
	const chartDetails = {
		labels: props.data.map((country) => country.name),
		datasets: [
			{
				label: "Data Usage",
				data: props.data.map((country) => country.dataUsage),
			},
		],
	};

	return (
		<div  style={{
            marginTop: "50px",
        }}> 
			<Bar data={chartDetails} height={500} width={500} options={{}} />
		</div>
	);
};

export default SimpleChart;
