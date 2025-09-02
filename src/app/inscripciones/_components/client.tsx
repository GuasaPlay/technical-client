'use client';

import { useState } from 'react';
import { useStudent } from '../_hooks/query.hook';
import { Enrollment } from './enrollment';
import { SearchStudent } from './search-student';
import { StudentWithEnrollment } from './sudent-with-enrollment';

export const EnrollmentsClient = () => {
	const [dniValue, setDniValue] = useState<string>('');
	const [showNewEnrollment, setShowNewEnrollment] = useState<boolean>(false);

	const { data } = useStudent({ dni: dniValue, enabled: !!dniValue });

	const handleBackToSearch = () => {
		setDniValue('');
		setShowNewEnrollment(false);
	};

	return (
		<div className="">
			{!data && <SearchStudent setDniValue={setDniValue} />}
			{data && data.exists && !showNewEnrollment && (
				<StudentWithEnrollment
					student={data}
					onNewEnrollment={() => setShowNewEnrollment(true)}
					onBack={handleBackToSearch}
				/>
			)}
			{data && data.exists && showNewEnrollment && (
				<Enrollment dniValue={dniValue} studentData={data.student} onCancel={() => setShowNewEnrollment(false)} />
			)}
			{data && !data.exists && <Enrollment dniValue={dniValue} studentData={null} onBack={handleBackToSearch} />}
		</div>
	);
};
