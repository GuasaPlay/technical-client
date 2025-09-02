'use client';

import { useCareersWithStats } from '@/app/inscripciones/_hooks/query.hook';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Eye, Users } from 'lucide-react';
import Link from 'next/link';

export const ClientStats = () => {
	const { data: careers, isLoading, error } = useCareersWithStats();

	if (isLoading) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<Card key={i} className="animate-pulse">
							<CardHeader>
								<div className="h-6 bg-gray-200 rounded w-3/4"></div>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<div className="h-4 bg-gray-200 rounded w-1/2"></div>
									<div className="h-4 bg-gray-200 rounded w-2/3"></div>
									<div className="h-10 bg-gray-200 rounded w-full"></div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mx-auto px-4 py-8">
				<Card className="border-red-200 bg-red-50">
					<CardContent className="text-center py-8">
						<p className="text-red-600">Error al cargar las estadísticas</p>
						<p className="text-sm text-red-500 mt-2">{error.message}</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	if (!careers || careers.length === 0) {
		return (
			<div className="container mx-auto px-4 py-8">
				<Card>
					<CardContent className="text-center py-8">
						<BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
						<p className="text-gray-500">No hay carreras disponibles</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	const totalStudents = careers.reduce((total, career) => total + career.studentsCount, 0);
	const totalOriginalCapacity = careers.reduce((total, career) => total + career.originalCapacity, 0);
	const availableCapacity = careers.reduce((total, career) => total + career.currentCapacity, 0);
	const globalOccupancyPercentage =
		totalOriginalCapacity > 0 ? ((totalStudents / totalOriginalCapacity) * 100).toFixed(1) : '0.0';

	return (
		<div className="container mx-auto px-4 py-8 space-y-8">
			{/* Resumen general */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Carreras</CardTitle>
						<BookOpen className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{careers.length}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Capacidad Original</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalOriginalCapacity}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Estudiantes</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalStudents}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Capacidad Disponible</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{availableCapacity}</div>
					</CardContent>
				</Card>
			</div>

			{/* Resumen Global */}
			<Card>
				<CardHeader>
					<CardTitle>Resumen Global del Sistema</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-lg font-medium">Ocupación total del sistema:</span>
							<span className="text-2xl font-bold text-blue-600">{globalOccupancyPercentage}%</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-3">
							<div
								className="bg-blue-600 h-3 rounded-full transition-all"
								style={{ width: `${globalOccupancyPercentage}%` }}
							></div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
							<div className="text-center">
								<p className="font-medium text-gray-500">Capacidad Total</p>
								<p className="text-xl font-bold">{totalOriginalCapacity}</p>
							</div>
							<div className="text-center">
								<p className="font-medium text-gray-500">Estudiantes Inscritos</p>
								<p className="text-xl font-bold text-green-600">{totalStudents}</p>
							</div>
							<div className="text-center">
								<p className="font-medium text-gray-500">Espacios Disponibles</p>
								<p className="text-xl font-bold text-orange-600">{availableCapacity}</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Lista de carreras */}
			<div>
				<h2 className="text-2xl font-bold mb-6">Carreras Disponibles</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{careers.map((career) => {
						const occupancyPercentage =
							career.originalCapacity > 0
								? ((career.studentsCount / career.originalCapacity) * 100).toFixed(1)
								: '0.0';

						return (
							<Card key={career.id} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="line-clamp-2">{career.name}</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="space-y-2">
										<div className="flex justify-between text-sm">
											<span>Capacidad original:</span>
											<span className="font-semibold">{career.originalCapacity}</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>Estudiantes inscritos:</span>
											<span className="font-semibold">{career.studentsCount}</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>Capacidad disponible:</span>
											<span className="font-semibold">{career.currentCapacity}</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>Ocupación:</span>
											<span className="font-semibold">{occupancyPercentage}%</span>
										</div>
									</div>

									{/* Barra de progreso */}
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-blue-600 h-2 rounded-full transition-all"
											style={{ width: `${occupancyPercentage}%` }}
										></div>
									</div>

									{/* Estado */}
									<div className="flex items-center gap-2">
										<div
											className={`w-3 h-3 rounded-full ${
												career.currentCapacity > 0 ? 'bg-green-500' : 'bg-red-500'
											}`}
										></div>
										<span className="text-sm font-medium">
											{career.currentCapacity > 0 ? 'Disponible' : 'Completa'}
										</span>
									</div>

									{/* Botón de detalles */}
									<Link href={`/estadisticas-de-inscripciones/${career.id}`} className="block">
										<Button variant="outline" className="w-full">
											<Eye className="w-4 h-4 mr-2" />
											Ver Detalles
										</Button>
									</Link>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};
