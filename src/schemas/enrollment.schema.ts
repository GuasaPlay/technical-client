import * as yup from 'yup';

export const EnrollmentSchema = yup.object({
	dni: yup
		.string()
		.required('El DNI es requerido')
		.min(10, 'El DNI debe tener exactamente 10 caracteres')
		.max(10, 'El DNI debe tener exactamente 10 caracteres')
		.matches(/^\d+$/, 'El DNI debe contener solo números'),
	names: yup.string().required('El nombre es requerido'),
	surnames: yup.string().required('El apellido es requerido'),
	email: yup.string().email('El correo electrónico no es válido').required('El correo electrónico es requerido'),

	originSchoolId: yup.string().required('La escuela de procedencia es requerida'),

	careerOfferedId: yup.string().required('La carrera ofrecida es requerida'),

	enrollmentFee: yup.number().required('La cuota de inscripción es requerida'),
});

export type EnrollmentSchemaType = yup.InferType<typeof EnrollmentSchema>;
