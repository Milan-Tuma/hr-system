import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export function BarChart({ legend, title, posData = [] }) {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: title,
			},
		},
	};

	const labels = posData.map((el) => el.position);

	const data = {
		labels,
		datasets: [
			{
				label: legend,
				data: posData.map((el) => el.age),
				backgroundColor: [
					'rgba(0, 79, 159, 0.5)',
					'rgba(7, 47, 95, 0.5)',
					'rgba(226, 26, 114, 0.5)',
					'rgba(105, 105, 105, 0.5)',
					'rgba(88, 204, 237, 0.5)',
				],
			},
		],
	};

	return <Bar options={options} data={data} />;
}
