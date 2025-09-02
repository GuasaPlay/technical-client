'use client';

import { useCareerDetails } from '@/app/inscripciones/_hooks/query.hook';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Calendar, DollarSign, Mail, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

interface CareerDetailsClientProps {
	careerId: string;
}

export const CareerDetailsClient = ({ careerId }: CareerDetailsClientProps) => {
	const { data: careerDetails, isLoading, error } = useCareerDetails({ id: careerId });

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('es-EC', {
			style: 'currency',
			currency: 'USD',
		}).format(amount);
	};

	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat('es-EC', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}).format(new Date(date));
	};

	if (isLoading) {
		return (
			<div className="space-y-6">
				{/* Header skeleton */}
				<div className="flex items-center gap-4">
					<div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
					<div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
				</div>

				{/* Stats skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{[1, 2, 3, 4].map((i) => (
						<Card key={i} className="animate-pulse">
							<CardHeader>
								<div className="h-4 bg-gray-200 rounded w-3/4"></div>
							</CardHeader>
							<CardContent>
								<div className="h-8 bg-gray-200 rounded w-1/2"></div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Students skeleton */}
				<Card className="animate-pulse">
					<CardHeader>
						<div className="h-6 bg-gray-200 rounded w-48"></div>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{[1, 2, 3].map((i) => (
								<div key={i} className="border rounded-lg p-4">
									<div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
									<div className="grid grid-cols-2 gap-4">
										<div className="h-4 bg-gray-200 rounded"></div>
										<div className="h-4 bg-gray-200 rounded"></div>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	if (error) {
		return (
			<div className="space-y-6">
				<div className="flex items-center gap-4">
					<Link href="/estadisticas-de-inscripciones">
						<Button variant="outline" size="sm">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Volver
						</Button>
					</Link>
				</div>
				<Card className="border-red-200 bg-red-50">
					<CardContent className="text-center py-8">
						<p className="text-red-600">Error al cargar los detalles de la carrera</p>
						<p className="text-sm text-red-500 mt-2">{error.message}</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	if (!careerDetails) {
		return (
			<div className="space-y-6">
				<div className="flex items-center gap-4">
					<Link href="/estadisticas-de-inscripciones">
						<Button variant="outline" size="sm">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Volver
						</Button>
					</Link>
				</div>
				<Card>
					<CardContent className="text-center py-8">
						<BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
						<p className="text-gray-500">No se encontraron detalles para esta carrera</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	const availableSpots = careerDetails.currentCapacity;
	const occupancyPercentage =
		careerDetails.originalCapacity > 0
			? ((careerDetails.totalEnrollments / careerDetails.originalCapacity) * 100).toFixed(1)
			: '0.0';

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link href="/estadisticas-de-inscripciones">
					<Button variant="outline" size="sm">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Volver
					</Button>
				</Link>
				<h1 className="text-3xl font-bold">{careerDetails.name}</h1>
			</div>

			{/* Statistics Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Capacidad Original</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{careerDetails.originalCapacity}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Capacidad Actual</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{careerDetails.currentCapacity}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Inscripciones</CardTitle>
						<BookOpen className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{careerDetails.totalEnrollments}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Ocupación</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{occupancyPercentage}%</div>
					</CardContent>
				</Card>
			</div>

			{/* Progress Bar */}
			<Card>
				<CardHeader>
					<CardTitle>Estado de Capacidad</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span>Ocupado: {careerDetails.totalEnrollments}</span>
							<span>Disponible: {availableSpots}</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-3">
							<div
								className={`h-3 rounded-full transition-all ${
									availableSpots > 0 ? 'bg-blue-600' : 'bg-red-600'
								}`}
								style={{ width: `${occupancyPercentage}%` }}
							></div>
						</div>
						<div className="flex items-center gap-2 mt-2">
							<div
								className={`w-3 h-3 rounded-full ${availableSpots > 0 ? 'bg-green-500' : 'bg-red-500'}`}
							></div>
							<span className="text-sm font-medium">
								{availableSpots > 0 ? 'Disponible para inscripciones' : 'Capacidad completa'}
							</span>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Students List */}
			<Card>
				<CardHeader>
					<CardTitle>Estudiantes Inscritos ({careerDetails.students.length})</CardTitle>
				</CardHeader>
				<CardContent>
					{careerDetails.students.length === 0 ? (
						<div className="text-center py-8">
							<Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
							<p className="text-gray-500">No hay estudiantes inscritos en esta carrera</p>
						</div>
					) : (
						<div className="space-y-4">
							{careerDetails.students.map((student) => (
								<div key={student.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
									<div className="flex justify-between items-start">
										<div className="flex-1">
											<h3 className="font-semibold text-lg mb-2">{student.fullName}</h3>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
												<div className="flex items-center gap-2">
													<Users className="w-4 h-4 text-gray-400" />
													<span className="font-medium text-gray-500">DNI:</span>
													<span>{student.dni}</span>
												</div>
												<div className="flex items-center gap-2">
													<Mail className="w-4 h-4 text-gray-400" />
													<span className="font-medium text-gray-500">Email:</span>
													<span>{student.email}</span>
												</div>
												<div className="flex items-center gap-2">
													<BookOpen className="w-4 h-4 text-gray-400" />
													<span className="font-medium text-gray-500">Escuela:</span>
													<span>{student.originSchool}</span>
												</div>
												<div className="flex items-center gap-2">
													<MapPin className="w-4 h-4 text-gray-400" />
													<span className="font-medium text-gray-500">Ciudad:</span>
													<span>{student.originCity}</span>
												</div>
												<div className="flex items-center gap-2">
													<Calendar className="w-4 h-4 text-gray-400" />
													<span className="font-medium text-gray-500">Fecha:</span>
													<span>{formatDate(student.enrollment.date)}</span>
												</div>
												<div className="flex items-center gap-2">
													<DollarSign className="w-4 h-4 text-gray-400" />
													<span className="font-medium text-gray-500">Cuota:</span>
													<span className="font-semibold text-green-600">
														{formatCurrency(student.enrollment.enrollmentFee)}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>

			{/* Summary */}
			{careerDetails.students.length > 0 && (
				<Card>
					<CardHeader>
						<CardTitle>Resumen Financiero</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex justify-between items-center">
							<span className="text-lg font-medium">Total recaudado en cuotas:</span>
							<span className="text-2xl font-bold text-green-600">
								{formatCurrency(
									careerDetails.students.reduce(
										(total, student) => total + student.enrollment.enrollmentFee,
										0
									)
								)}
							</span>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
};
