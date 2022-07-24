import { Box, Button, Paper, Typography } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import * as yup from 'yup';
import { UnformInputsText } from '../../shared/components';

interface IInputTextProps {
	firstName: string;
}

const validationYupSchema: yup.SchemaOf<IInputTextProps> = yup.object().shape({
	firstName: yup.string().required().min(3),
});

export const Home = () => {
	const unformRef = useRef<FormHandles>(null);

	const handleSubmitForm = (data: IInputTextProps) => {
		validationYupSchema.validate(data, { abortEarly: false })
			.then((validateData) => {
				if (validateData) {
					console.log(validateData);
				}
			})
			.catch((errors: yup.ValidationError) => {
				const validationErrors: { [key: string]: string } = {};
				errors.inner.map(error => {
					if (!error.path) return;
					validationErrors[error.path] = error.message;
				});
				unformRef.current?.setErrors(validationErrors);
			});
	};


	return (
		<Box
			width='100vw'
			height='100vh'
			display='flex'
			alignItems='center'
			flexDirection='column'
			padding={2}
		>
			<Box
				marginBottom={4}
				component={Paper}
				width='100%'
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
			<Form ref={unformRef} onSubmit={handleSubmitForm}>
				<UnformInputsText name='firstName' label='First name' />
			</Form>
			<Button onClick={() => unformRef.current?.submitForm()}>Enviar</Button>
		</Box>
	);
};
