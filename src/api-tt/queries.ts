/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_ERROR_MESSAGE } from '@/constants/Messages';
import { CareerResponse, SchoolResponse } from '@/interfaces/common.interface';
import { StudentRequest, StudentResponse } from '@/interfaces/student.interfaces';
import { EnrollmentSchemaType } from '@/schemas/enrollment.schema';
import ttApi from '.';

export const getStudent = async (variables: StudentRequest): Promise<StudentResponse> => {
	try {
		const { data } = await ttApi.get<StudentResponse>(`/student/${variables.dni}`);

		return data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || DEFAULT_ERROR_MESSAGE);
	}
};

export const getSchools = async (): Promise<SchoolResponse[]> => {
	try {
		const { data } = await ttApi.get<SchoolResponse[]>(`/origin-school`);

		return data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || DEFAULT_ERROR_MESSAGE);
	}
};

export const getCareers = async (): Promise<CareerResponse[]> => {
	try {
		const { data } = await ttApi.get<CareerResponse[]>(`/career-offered`);

		return data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || DEFAULT_ERROR_MESSAGE);
	}
};

export const createEnrollment = async (body: EnrollmentSchemaType): Promise<{ message: string }> => {
	try {
		const { data } = await ttApi.post<{ message: string }>(`/enrollment/create`, body);

		return data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || DEFAULT_ERROR_MESSAGE);
	}
};
