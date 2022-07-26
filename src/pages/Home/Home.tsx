import { Box } from '@mui/material';
import { Header, InputsValidation } from '../../shared/components';
import '../../shared/components/Form-Inputs/TranslateErrors.ts';

export const Home = () => {


	return (
		<Box
			width='100vw'
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
