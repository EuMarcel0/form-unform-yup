import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';

import { Box, TextField, TextFieldProps } from '@mui/material';
import { normalizeCPF, normalizePhoneNumber } from '../../Utils/Masks';

type IUnformInputsTextProps = TextFieldProps & {
	name: string;
}

export const UnformInputsPhone = ({ name, ...rest }: IUnformInputsTextProps) => {
	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);

	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => normalizeCPF(value),
			setValue: (_, newValue) => setValue(newValue),
			clearValue: () => setValue(''),
		});
	}, [registerField, fieldName, value]);

	return (
		<Box width={700} sx={{ my: '20px' }}  >
			<TextField
				{...rest}
				value={normalizeCPF(value)}
				onChange={e => { setValue(e.target.value); rest.onChange?.(e); }}
				error={!!error}
				helperText={error}
				onKeyDown={e => { error && clearError(); rest.onKeyDown?.(e); }}
				defaultValue={defaultValue}
			/>
		</Box>
	);
};
