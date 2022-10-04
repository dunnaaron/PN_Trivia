import { createTheme, Theme } from '@mui/material/styles';

const PN_GREEN = '#0c251f';
const PN_TAN = '#d9c382';

const theme: Theme = createTheme({
	palette: {
		primary: {
			main: PN_GREEN,
		},
		secondary: {
			main: PN_TAN,
		},
	},
});

export default theme;
