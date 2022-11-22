import {
	Chart,
	BubbleDataPoint,
	ChartData,
	ScatterDataPoint,
	ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartContainer } from './PieChart.styled';

// This line is required to get the chart to render, don't ask me why
Chart.register(ArcElement);

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

const PieChart = () => (
	<PieChartContainer>
		<Pie
			data={fakeData}
			fallbackContent="Pie Chart"
			options={{
				plugins: {
					title: {
						display: true,
						text: 'Users Gained between 2016-2020',
					},
				},
			}}
		/>
	</PieChartContainer>
);

export default PieChart;
