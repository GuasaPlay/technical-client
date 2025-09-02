import * as yup from 'yup';

export const SearchStudentSchema = yup.object({
	dni: yup
		.string()
		.required('El DNI es requerido')
		.min(10, 'El DNI debe tener exactamente 10 caracteres')
		.max(10, 'El DNI debe tener exactamente 10 caracteres')
		.matches(/^\d+$/, 'El DNI debe contener solo números')
		.typeError('El DNI es requerido'),
});

export type SearchStudentSchemaType = yup.InferType<typeof SearchStudentSchema>;
