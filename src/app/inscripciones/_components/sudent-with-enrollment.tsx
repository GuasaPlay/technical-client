'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StudentResponse } from '@/interfaces/student.interfaces';
import { Plus } from 'lucide-react';

interface StudentWithEnrollmentProps {
	student: StudentResponse;
	onNewEnrollment?: () => void;
}

export const StudentWithEnrollment = ({ student, onNewEnrollment }: StudentWithEnrollmentProps) => {
	const { student: studentData } = student;

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('es-EC', {
			style: 'currency',
			currency: 'USD',
		}).format(amount);
	};

	return (
		<div className="space-y-6 p-10">
			{/* Información del estudiante */}
			<Card>
				<CardHeader>
					<CardTitle>Información del Estudiante</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="text-sm font-medium text-gray-500">DNI</label>
							<p className="text-lg font-semibold">{studentData.dni}</p>
						</div>
						<div>
							<label className="text-sm font-medium text-gray-500">ID</label>
							<p className="text-lg font-semibold">{studentData.id}</p>
						</div>
						<div>
							<label className="text-sm font-medium text-gray-500">Nombres</label>
							<p className="text-lg font-semibold">{studentData.names}</p>
						</div>
						<div>
							<label className="text-sm font-medium text-gray-500">Apellidos</label>
							<p className="text-lg font-semibold">{studentData.surnames}</p>
						</div>
						<div className="md:col-span-2">
							<label className="text-sm font-medium text-gray-500">Email</label>
							<p className="text-lg font-semibold">{studentData.email}</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Lista de inscripciones */}
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle>Inscripciones ({studentData.enrollments.length})</CardTitle>
						{onNewEnrollment && (
							<Button onClick={onNewEnrollment} size="sm">
								<Plus className="w-4 h-4 mr-2" />
								Nueva Inscripción
							</Button>
						)}
					</div>
				</CardHeader>
				<CardContent>
					{studentData.enrollments.length === 0 ? (
						<div className="text-center py-8">
							<p className="text-gray-500">No hay inscripciones registradas</p>
						</div>
					) : (
						<div className="space-y-4">
							{studentData.enrollments.map((enrollment) => (
								<div key={enrollment.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
									<div className="flex justify-between items-start">
										<div className="flex-1">
											<h3 className="font-semibold text-lg mb-2">{enrollment.careerOffered.name}</h3>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm"></div>
										</div>
										<div className="text-right">
											<div className="text-sm font-medium text-gray-500">Cuota de Inscripción</div>
											<div className="text-xl font-bold text-green-600">
												{formatCurrency(enrollment.enrollmentFee)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>

			{/* Resumen */}
			{studentData.enrollments.length > 0 && (
				<Card>
					<CardHeader>
						<CardTitle>Resumen</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex justify-between items-center">
							<span className="text-lg font-medium">Total de cuotas de inscripción:</span>
							<span className="text-2xl font-bold text-green-600">
								{formatCurrency(
									studentData.enrollments.reduce((total, enrollment) => total + enrollment.enrollmentFee, 0)
								)}
							</span>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
};
