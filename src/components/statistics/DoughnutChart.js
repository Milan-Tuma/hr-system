import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ posData = [] }) {
	const options = {
		plugins: {
			legend: {
				position: 'bottom',
			},
		},
	};

	const data = {
		labels: posData.map((el) => el.position),
		datasets: [
			{
				data: posData.map((el) => el.count),
				backgroundColor: [
					'rgba(0, 79, 159, 0.2)',
					'rgba(7, 47, 95, 0.2)',
					'rgba(226, 26, 114, 0.2)',
					'rgba(105, 105, 105, 0.2)',
					'rgba(88, 204, 237, 0.2)',
				],
				borderColor: [
					'rgba(0, 79, 159, 1)',
					'rgba(7, 47, 95, 1)',
					'rgba(226, 26, 114, 1)',
					'rgba(105, 105, 105, 1)',
					'rgba(88, 204, 237, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
