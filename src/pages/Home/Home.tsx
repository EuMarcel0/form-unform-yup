import { Box } from '@mui/material';
import { Header, InputsValidation } from '../../shared/components';
import '../../shared/components/Form-Inputs/TranslateErrors';

export const Home = () => {
	return (
		<Box
			width='100%'
			height='100vh'
			display='flex'
			alignItems='center'
			flexDirection='column'
			padding={2}
		>
			<Header />
			<InputsValidation />
		</Box>
	);
};
