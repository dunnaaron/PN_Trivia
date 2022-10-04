import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

export const AppContainer = styled(Container)(({ theme }) => ({
	minHeight: '100vh',
	minWidth: '100vw',
	backgroundColor: theme.palette.primary.main,
}));

export const Logo = styled('img')(() => ({
	height: '10rem',
	width: '10rem',
}));

export const ButtonContainer = styled(Container)({
	display: 'flex',
	justifyContent: 'center',
});

export const ButtonExample = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
}));
