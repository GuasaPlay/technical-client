'use client';

import { useState } from 'react';
import { useStudent } from '../_hooks/query.hook';
import { Enrollment } from './enrollment';
import { SearchStudent } from './search-student';
import { StudentWithEnrollment } from './sudent-with-enrollment';

export const EnrollmentsClient = () => {
	const [dniValue, setDniValue] = useState<string>('');

	const { data } = useStudent({ dni: dniValue, enabled: !!dniValue });

	return (
		<div className="">
			{!data && <SearchStudent setDniValue={setDniValue} />}
			{data && data.exists && <StudentWithEnrollment student={data} />}
			{data && !data.exists && <Enrollment dniValue={dniValue} />}
		</div>
	);
};
