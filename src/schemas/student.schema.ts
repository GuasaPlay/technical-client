import * as yup from 'yup';

export const SearchStudentSchema = yup.object({
	dni: yup.string().required('El DNI es requerido').typeError('El DNI es requerido'),
});

export type SearchStudentSchemaType = yup.InferType<typeof SearchStudentSchema>;
