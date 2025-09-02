export interface UserRequest {
	dni: string;
}

export interface UserResponse {
	id: string;
	dni: string;
	names: string;
	surnames: string;
	email: string;
	enrollments: Enrollment[];
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
