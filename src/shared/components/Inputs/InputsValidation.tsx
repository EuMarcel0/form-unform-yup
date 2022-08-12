import { Box, Button } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import * as yup from 'yup';
import { UnformInputsText } from '../Form-Inputs/UnformInputsText';
import { UnformInputsPhone } from '../Form-Inputs/UnformInputsPhone';
import { UnformInputsCPF } from '../Form-Inputs/UnformInputsCPF';
import { UnformInputsCNPJ } from '../Form-Inputs/UnformInputsCNPJ';
import { UnformInputsPhoneFixed } from '../Form-Inputs/UnformInputsPhoneFixed';
import { UnformInputsBirthDate } from '../Form-Inputs/UnformInputsBirthDate';
import { UnformInputsPostalCode } from '../Form-Inputs/UnformInputsPostalCode';

interface IInputsValidation {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	city: string;
	state: string;
	country: string;
	phone: string;
	cpf: string;
	cnpj: string;
	fixedPhone: string;
	birthDate: string;
	postalCode: string;
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
	cpf: yup.string().required(),
	cnpj: yup.string().required(),
	fixedPhone: yup.string().required(),
	birthDate: yup.string().required(),
	postalCode: yup.string().required(),
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
						cpf: '',
						cnpj: '',
						fixedPhone: '',
						birthDate: '',
						postalCode: '',
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
		<Box paddingY={3}>
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
					<UnformInputsPhone name='phone' label='Phone - pt_br' />
					<UnformInputsCPF name='cpf' label='CPF - pt_br' />
					<UnformInputsBirthDate name='birthDate' label='Birth Date - pt_br' />
					<UnformInputsPostalCode name='postalCode' label='CEP - pt_br' />
					<UnformInputsCNPJ name='cnpj' label='CNPJ - pt_br' />
					<UnformInputsPhoneFixed name='fixedPhone' label='Fixed Phone - pt_br' />
				</Form>
			</Box>
			<Box width='100%' display='flex' justifyContent='center'>
				<Button variant='contained' onClick={() => unformRef.current?.submitForm()} sx={{ mt: '30px' }}>Send</Button>
			</Box>
		</Box>
	);
};
