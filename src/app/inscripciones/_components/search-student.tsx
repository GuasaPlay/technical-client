'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SearchStudentSchema, SearchStudentSchemaType } from '@/schemas/student.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface SearchStudentProps {
	setDniValue: (value: string) => void;
}

export const SearchStudent = ({ setDniValue }: SearchStudentProps) => {
	const form = useForm<SearchStudentSchemaType>({
		resolver: yupResolver(SearchStudentSchema),
		mode: 'all',
		values: { dni: '' },
	});

	const onSubmit = (data: SearchStudentSchemaType) => {
		setDniValue(data.dni);
	};

	return (
		<Form {...form}>
			<form className="h-screen w-screen grid place-items-center" onSubmit={form.handleSubmit(onSubmit)}>
				<Card className="w-2/6">
					<CardHeader>
						<CardTitle className="text-center text-2xl">Ingrese su cédula</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="dni"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Ingrese 10 dígitos"
												{...field}
												maxLength={10}
												type="text"
												inputMode="numeric"
												pattern="[0-9]*"
												onInput={(e) => {
													// Solo permitir números
													const target = e.target as HTMLInputElement;
													target.value = target.value.replace(/\D/g, '');
													field.onChange(target.value);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full">
								Consultar
							</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</Form>
	);
};
