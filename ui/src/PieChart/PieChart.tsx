import {
	ArcElement,
	BubbleDataPoint,
	Chart,
	ChartData,
	Legend,
	ScatterDataPoint,
	Tooltip,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartContainer } from './PieChart.styled';

// This line is required to get the chart to render https://react-chartjs-2.js.org/faq/registered-element
Chart.register(ArcElement, Tooltip, Legend);

const fakeData: ChartData<
	'pie',
	(number | [number, number] | ScatterDataPoint | BubbleDataPoint | null)[],
	unknown
> = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 205, 86)',
			],
			hoverOffset: 4,
		},
	],
};

interface IPieChart {
	displayLabels: boolean;
}

const PieChart = ({ displayLabels }: IPieChart) => {
	return (
		<PieChartContainer>
			<Pie
				data={fakeData}
				fallbackContent="Pie Chart"
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Example pie chart',
						},
						legend: {
							display: displayLabels,
						},
					},
					radius: '95%',
				}}
			/>
		</PieChartContainer>
	);
};

export default PieChart;
