import { Box, Paper, Typography } from '@mui/material';

export const Header = () => {
	return (
		<Box
			marginBottom={4}
			component={Paper}
			width='100vw'
			height='50px'
			display='flex'
			alignItems='center'
			justifyContent='center'
			elevation={5}
		>
			<Typography
				variant='caption'
				fontSize='16px'
				textAlign='center'
			>
				Inputs forms validation
			</Typography>
		</Box>
	);
};
