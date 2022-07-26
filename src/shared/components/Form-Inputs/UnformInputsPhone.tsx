import { useField } from '@unform/core';
import React, { useEffect, useState } from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';
import InputMask, { Props } from 'react-input-mask';

type IUnformInputsTextProps = TextFieldProps & {
	name: string;
}

export const UnformInputsPhone = ({ name, children, ...rest }: IUnformInputsTextProps) => {
	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [registerField, value, fieldName]);

	return (
		<Box width={700} sx={{ my: '20px' }}>
			<InputMask mask='(999) 9 9999-9999' onChange={e => setValue(e.target.value)} value={value}>
				<TextField

				/>
			</InputMask>
		</Box>
	);
};
