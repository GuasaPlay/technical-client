export interface StudentRequest {
	dni: string;
}

export interface StudentResponse {
	student: { id: string; dni: string; names: string; surnames: string; email: string; enrollments: Enrollment[] };
	exists: boolean;
}

export interface Enrollment {
	id: string;
	enrollmentFee: number;
	careerOffered: CareerOffered;
}

export interface CareerOffered {
	id: string;
	name: string;
}
