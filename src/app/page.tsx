import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="h-screen w-screen grid place-content-center gap-10">
			<h1 className="text-2xl font-bold">SISTEMA DE INSCRIPCIONES A CARRERAS UNIVERSITARIAS</h1>
			<div className="flex space-x-10 items-center justify-center">
				<Button asChild size={'lg'}>
					<Link href="/estadisticas-de-inscripciones">Estadisticas de Inscripciones</Link>
				</Button>
				<Button asChild size={'lg'}>
					<Link href="/inscripciones">Inscripciones</Link>
				</Button>
			</div>
		</div>
	);
}
