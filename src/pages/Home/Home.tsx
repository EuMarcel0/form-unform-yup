import { Box } from '@mui/material';
import { Header, InputTextLastName, InputTextName } from '../../shared/components';
import { ButtonSubmit } from '../../shared/components/ButtonSubmit/ButtonSubmit';
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
			<InputTextName />
			<InputTextLastName />
			<ButtonSubmit />
		</Box>
	);
};
