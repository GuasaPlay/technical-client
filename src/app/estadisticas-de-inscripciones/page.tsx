import { ClientStats } from './_components/client';

export default function Page() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-center text-4xl font-bold mb-8">Estadísticas de Inscripciones</h1>
			<ClientStats />
		</div>
	);
}
