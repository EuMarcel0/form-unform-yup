import { Box, Button, Paper, Typography } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import * as yup from 'yup';
import { UnformInputsText } from '../Form-Inputs/UnformInputsText';
import { Header } from '../Header/Header';

interface IInputTextProps {
	firstName: string;
}

const validationYupSchema: yup.SchemaOf<IInputTextProps> = yup.object().shape({
	firstName: yup.string().required().min(3),
});

export const InputTextName = () => {
	const unformRef = useRef<FormHandles>(null);

	const handleSubmitForm = (data: IInputTextProps) => {
		validationYupSchema.validate(data, { abortEarly: false })
			.then((validateData) => {
				if (validateData) {
					alert('Successfully! Input text validated');
					unformRef.current?.setData({
						firstName: '',
					});
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
		<Box>
			<Box
				width='100%'
				display='flex'
				justifyContent='center'
			>
				<Form ref={unformRef} onSubmit={handleSubmitForm}>
					<UnformInputsText name='firstName' label='First name' fullWidth />
				</Form>
			</Box>
			{/* <Box width='100%' display='flex' justifyContent='center'>
				<Button variant='contained' onClick={() => unformRef.current?.submitForm()} sx={{ mt: '30px' }}>Send</Button>
			</Box> */}
		</Box>
	);
};
