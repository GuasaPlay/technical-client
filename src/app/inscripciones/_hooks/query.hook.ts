import { createEnrollment, getCareers, getSchools, getStudent } from '@/api-tt/queries';
import { CAREERS_KEY, SCHOOLS_KEY, STUDENT_KEY } from '@/api-tt/query-keys';
import { useMutation, useQuery } from '@tanstack/react-query';

interface UseStudentProps {
	dni: string;
	enabled: boolean;
}
export const useStudent = ({ dni, enabled }: UseStudentProps) => {
	return useQuery({
		queryKey: [STUDENT_KEY, { dni }],
		queryFn: () => getStudent({ dni }),
		staleTime: Infinity,
		enabled,
	});
};

export const useSchools = () => {
	return useQuery({
		queryKey: [SCHOOLS_KEY],
		queryFn: () => getSchools(),
		staleTime: Infinity,
	});
};

export const useCareers = () => {
	return useQuery({
		queryKey: [CAREERS_KEY],
		queryFn: () => getCareers(),
		staleTime: Infinity,
	});
};

export const useCreateEnrollment = () => {
	return useMutation({
		mutationFn: createEnrollment,
	});
};
