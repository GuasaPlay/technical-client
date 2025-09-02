export interface SchoolResponse {
	id: string;
	name: string;
	city: string;
	type: string;
}

export interface CareerResponse {
	id: string;
	name: string;
	originalCapacity: number;
	currentCapacity: number;
}

export interface CareerWithStatsResponse {
	id: string;
	name: string;
	originalCapacity: number;
	currentCapacity: number;
	studentsCount: number;
}

export interface CareerDetailsResponse {
	id: string;
	name: string;
	originalCapacity: number;
	currentCapacity: number;
	totalEnrollments: number;
	students: CareerDetailsStudent[];
}

export interface CareerDetailsStudent {
	id: string;
	dni: string;
	fullName: string;
	email: string;
	originSchool: string;
	originCity: string;
	enrollment: CareerDetailsEnrollment;
}

export interface CareerDetailsEnrollment {
	id: string;
	enrollmentFee: number;
	date: Date;
}
