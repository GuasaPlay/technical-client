/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_ERROR_MESSAGE } from '@/constants/Messages';
import { UserRequest, UserResponse } from '@/interfaces/user.interfaces';
import ttApi from '.';

export const getActivityEventsPaginated = async (variables: UserRequest): Promise<UserResponse> => {
	try {
		const { data } = await ttApi.get<UserResponse>(`/activity-event-mobile/${variables.dni}`);

		return data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || DEFAULT_ERROR_MESSAGE);
	}
};
