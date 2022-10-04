import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {
	AppContainer,
	ButtonContainer,
	ButtonExample,
	Logo,
} from './App.styled';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppContainer className="App">
				<Logo src="/logo-large.png" className="App-logo" alt="logo" />
				<ButtonContainer>
					<ButtonExample variant="contained">Button</ButtonExample>
				</ButtonContainer>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
