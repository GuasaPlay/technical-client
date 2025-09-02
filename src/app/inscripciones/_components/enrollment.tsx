/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EnrollmentSchema, EnrollmentSchemaType } from '@/schemas/enrollment.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useCareers, useCreateEnrollment, useSchools } from '../_hooks/query.hook';

interface SearchStudentProps {
	dniValue: string;
}

export const Enrollment = ({ dniValue }: SearchStudentProps) => {
	const { data: schools } = useSchools();

	const { data: careers } = useCareers();

	const { mutate } = useCreateEnrollment();

	const form = useForm<EnrollmentSchemaType>({
		resolver: yupResolver(EnrollmentSchema),
		mode: 'all',
		values: {
			dni: dniValue,
			names: '',
			surnames: '',
			email: '',
			originSchoolId: '',
			careerOfferedId: '',
			enrollmentFee: 0 as any,
		},
	});

	const onSubmit = (data: EnrollmentSchemaType) => {
		mutate(data, {
			onSuccess: (data) => {
				toast.success('Inscripción creada exitosamente');

				location.reload();
			},

			onError: (error: any) => {
				toast.error(error.message || 'Error al crear la inscripción');
			},
		});
	};

	console.log(form.formState);

	return (
		<Form {...form}>
			<form className="h-screen w-screen grid place-items-center" onSubmit={form.handleSubmit(onSubmit)}>
				<Card className="w-3/4">
					<CardHeader>
						<CardTitle className="text-center text-2xl">Registro de Inscripción</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-3 gap-6">
							<FormField
								control={form.control}
								name="dni"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Cédula</FormLabel>
										<FormControl>
											<Input placeholder="Ej. 0106179450" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="names"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nombres</FormLabel>
										<FormControl>
											<Input placeholder="Ej. Oscar Romario" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="surnames"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Apellidos</FormLabel>
										<FormControl>
											<Input placeholder="Ej. Calle Saquicela" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="Ej. oscar@example.com" type="email" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="careerOfferedId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Carrera Ofrecida</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange} defaultValue={field.value}>
												<FormControl>
													<SelectTrigger>
														<SelectValue className="w-full" placeholder="Seleccione una opción" />
													</SelectTrigger>
												</FormControl>

												<SelectContent>
													{careers?.map((career) => (
														<SelectItem key={career.id} value={career.id}>
															{career.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="originSchoolId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Escuela de procedencia</FormLabel>
										<FormControl>
											<Select
												onValueChange={(e) => {
													console.log(e);

													const found = schools?.find((school) => school.id === e);

													const enrollmentFee =
														found?.type === 'FISCAL' || found?.type === 'FISCOMISIONAL' ? 100 - 3 : 100;

													form.setValue('enrollmentFee', enrollmentFee);

													field.onChange(e);
												}}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue className="w-full" placeholder="Seleccione una opción" />
													</SelectTrigger>
												</FormControl>

												<SelectContent>
													{schools?.map((school) => (
														<SelectItem key={school.id} value={school.id}>
															<div>
																<p>
																	{school.name} -{' '}
																	<span className="text-sm text-slate-600">{school.city}</span>
																</p>
															</div>
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="enrollmentFee"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Cuota de Inscripción</FormLabel>
										<FormControl>
											<Input disabled type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="mt-8 flex items-center space-x-4 justify-end">
							<Button variant={'secondary'}>Cancelar</Button>
							<Button type="submit">Crear Inscripción</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</Form>
	);
};
