import {
	createEnrollment,
	getCareerDetails,
	getCareers,
	getCareersWithStats,
	getSchools,
	getStudent,
} from '@/api-tt/queries';
import { CAREERS_KEY, CAREERS_WITH_STATS_KEY, CAREER_DETAILS_KEY, SCHOOLS_KEY, STUDENT_KEY } from '@/api-tt/query-keys';
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

export const useCareersWithStats = () => {
	return useQuery({
		queryKey: [CAREERS_WITH_STATS_KEY],
		queryFn: () => getCareersWithStats(),
		staleTime: Infinity,
	});
};

interface UseCareerDetailsProps {
	id: string;
	enabled?: boolean;
}

export const useCareerDetails = ({ id, enabled = true }: UseCareerDetailsProps) => {
	return useQuery({
		queryKey: [CAREER_DETAILS_KEY, { id }],
		queryFn: () => getCareerDetails(id),
		staleTime: Infinity,
		enabled,
	});
};

export const useCreateEnrollment = () => {
	return useMutation({
		mutationFn: createEnrollment,
	});
};
