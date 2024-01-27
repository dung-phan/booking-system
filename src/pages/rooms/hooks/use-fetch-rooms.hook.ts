import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { RoomDetails } from '../types/room.type'

type QueryResult = {
	rooms: RoomDetails[]
}
export function useFetchRooms() {
	const queryReturns = useQuery<QueryResult>({
		queryKey: ['rooms'],
		queryFn: async () => {
			const response = await axios.get(import.meta.env.VITE_API_URL + '/rooms.json')
			return response.data
		},
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})
	const { data, isLoading } = queryReturns

	return {
		...queryReturns,
		rooms: data?.rooms ?? [],
		hasRooms: data?.rooms.length && !isLoading,
	}
}
