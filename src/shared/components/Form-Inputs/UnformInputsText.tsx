import { useEffect, useState, memo } from 'react';
import { useField } from '@unform/core';
import { Box, TextField, TextFieldProps } from '@mui/material';


type IUnformInputsTextProps = TextFieldProps & {
	name: string;
}

const UnformInputsText = ({ name, ...rest }: IUnformInputsTextProps) => {
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
			<TextField
				{...rest}

				value={value}
				onKeyDown={(e) => { error && clearError(); rest.onKeyDown?.(e); }}
				onChange={(e) => { setValue(e.target.value); rest.onChange?.(e); }}
				helperText={error}
				error={!!error}
				defaultValue={defaultValue}
				size={'small'}


			/>
		</Box>
	);
};
export default memo(UnformInputsText);
