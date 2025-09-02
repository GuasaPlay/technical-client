import { CareerDetailsClient } from './_components/career-details-client';

interface PageProps {
	params: Promise<{ careerId: string }>;
}

export default async function CareerDetailsPage({ params }: PageProps) {
	const { careerId } = await params;

	return (
		<div className="container mx-auto px-4 py-8">
			<CareerDetailsClient careerId={careerId} />
		</div>
	);
}
