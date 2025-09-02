'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
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
				<Card>
					<CardHeader>
						<CardTitle className="text-center text-2xl">Ingrese su cédula</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-2">
							<FormField
								control={form.control}
								name="dni"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder="DNI" {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<Button type="submit">Consultar</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</Form>
	);
};
