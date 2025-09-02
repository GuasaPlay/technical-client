import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className="h-screen w-screen grid place-content-center">
			<h1 className="text-4xl font-bold">Welcome to the Technical Client</h1>
			<Button className="mt-4">Get Started</Button>
		</div>
	);
}
