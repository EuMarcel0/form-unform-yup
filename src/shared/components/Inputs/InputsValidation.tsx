import { Box, Button, TextField } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import * as yup from 'yup';
import { UnformInputsText } from '../Form-Inputs/UnformInputsText';
import { UnformInputsPhone } from '../Form-Inputs/UnformInputsPhone';

interface IInputsValidation {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	city: string;
	state: string;
	country: string;
	phone: string;
}

const validationYupSchema: yup.SchemaOf<IInputsValidation> = yup.object().shape({
	firstName: yup.string().required().min(3),
	lastName: yup.string().required().min(3),
	email: yup.string().required().email(),
	address: yup.string().required().min(3),
	city: yup.string().required().min(3),
	state: yup.string().required().min(2),
	country: yup.string().required().min(2),
	phone: yup.string().required(),
});

export const InputsValidation = () => {
	const unformRef = useRef<FormHandles>(null);

	const handleSubmitForm = (data: IInputsValidation) => {
		validationYupSchema.validate(data, { abortEarly: false })
			.then((validateData) => {
				if (validateData) {
					alert('Successfully! Inputs validated');
					unformRef.current?.setData({
						firstName: '',
						lastName: '',
						email: '',
						address: '',
						city: '',
						state: '',
						country: '',
						phone: '',
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
					<UnformInputsText name='lastName' label='Last name' fullWidth />
					<UnformInputsText name='email' label='E-mail' fullWidth />
					<UnformInputsText name='address' label='Address' fullWidth />
					<UnformInputsText name='city' label='City' fullWidth />
					<UnformInputsText name='state' label='State' />
					<UnformInputsText name='country' label='Country' fullWidth />
					<UnformInputsPhone name='phone' label='Phone' />
				</Form>
			</Box>
			<Box width='100%' display='flex' justifyContent='center'>
				<Button variant='contained' onClick={() => unformRef.current?.submitForm()} sx={{ mt: '30px' }}>Send</Button>
			</Box>
		</Box>
	);
};
