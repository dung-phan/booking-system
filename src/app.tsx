import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { RoomsPage } from './pages/rooms/rooms.page'
import { queryClient } from './query-client'
import { customTheme } from './styles/theme'
import { Fonts } from './styles/fonts'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={customTheme} cssVarsRoot="body">
				<Fonts />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<RoomsPage />} />
						<Route path="/rooms" element={<RoomsPage />} />
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	)
}
