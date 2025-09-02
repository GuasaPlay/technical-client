import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ClientStats } from './_components/client';

export default function Page() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex items-center gap-4 mb-8">
				<Link href="/">
					<Button variant="outline" size="sm">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Inicio
					</Button>
				</Link>
				<h1 className="text-4xl font-bold">Estadísticas de Inscripciones</h1>
			</div>
			<ClientStats />
		</div>
	);
}
