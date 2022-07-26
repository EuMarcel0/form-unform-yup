import { Box, Typography } from '@mui/material';

export const Header = () => {
	return (
		<Box
			marginBottom={4}
			width='100%'
			height='50px'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<Typography
				variant='caption'
				fontSize='16px'
				textAlign='center'
			>
				Inputs forms validation with Unform, Yup, Material UI and Regex
			</Typography>
		</Box>
	);
};
