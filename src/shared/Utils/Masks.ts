import { useCallback } from 'react';

/**
 * Mask for normalize phone number - locale pt_br;
 */
export const normalizePhoneNumber = (value: string | undefined) => {
	if (!value) return '';
	return value
		.replace(/[\D]/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.replace(/(-\d{4})(\d+?)/, '$1');
};
/**
 * Mask for normalize CPF -  locale pt_br;
 */
export const normalizeCPF = (value: string | undefined) => {
	if (!value) return '';
	return value
		.replace(/[\D]/g, '')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(.\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1-$2')
		.replace(/(-\d{2})(\d+?)/, '$1');
};
/**
 * Mask for normalize CNPJ -  locale pt_br;
 */
export const normalizeCNPJ = (value: string | undefined) => {
	if(!value) return '';
	return value
		.replace(/[\D]/g, '')
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1/$2')
		.replace(/(\d{4})(\d)/, '$1-$2')
		.replace(/(-\d{2})(\d+?)/, '$1');
};
/**
 * Mask for normalize fixed phone -  locale pt_br;
 */
export const normalizePhoneFixed = (value: string | undefined) => {
	if (!value) return '';
	return value
		.replace(/[\D]/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{4})(\d)/, '$1-$2')
		.replace(/(-\d{4})(\d+?)/, '$1');
};
/**
 * Mask for normalize birth date -  locale pt_br;
 */
export const normalizeBirthDate = (value: string | undefined) => {
	if (!value) return '';
	return value
		.replace(/[\D]/g, '')
		.replace(/(\d{2})(\d)/, '$1/$2')
		.replace(/(\d{2})(\d)/, '$1/$2')
		.replace(/(\d{4})(\d+?)/, '$1');
};


