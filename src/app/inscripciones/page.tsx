import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { EnrollmentsClient } from './_components/client';

export default function Page() {
	return (
		<div>
			<div className="fixed top-4 left-4 z-10">
				<Link href="/">
					<Button variant="outline" size="sm">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Inicio
					</Button>
				</Link>
			</div>
			<EnrollmentsClient />
		</div>
	);
}
