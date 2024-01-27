import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { queryClient } from '../query-client'

export function TestWrapper({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>{children}</ChakraProvider>
		</QueryClientProvider>
	)
}
