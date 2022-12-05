import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import PieChart from '../PieChart/PieChart';
import theme from '../theme';
import {
	AppContainer,
	ButtonContainer,
	ButtonExample,
	Logo,
} from './App.styled';

function App() {
	const [displayLabels, setDisplayLabels] = useState(true);
	const toggleDisplayLabels = () => setDisplayLabels(!displayLabels);

	return (
		<ThemeProvider theme={theme}>
			<AppContainer className="App">
				<Logo src="/logo-large.png" className="App-logo" alt="logo" />
				<PieChart displayLabels={displayLabels} />
				<ButtonContainer>
					<ButtonExample variant="contained" onClick={toggleDisplayLabels}>
						Button
					</ButtonExample>
				</ButtonContainer>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
