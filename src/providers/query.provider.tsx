'use client';
import { PropsWithChildren, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const QueryProvider = ({ children }: PropsWithChildren) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: { queries: { staleTime: 20 * 1000, retry: 1 } },
		})
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default QueryProvider;
