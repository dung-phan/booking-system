import { renderHook, waitFor } from '@testing-library/react'

import { useFetchRooms } from './use-fetch-rooms.hook'
import { TestWrapper } from '../../../test/test-wrapper.component'

describe('useFetchRooms', () => {
	it('returns query results correctly', async () => {
		const { result } = renderHook(() => useFetchRooms(), { wrapper: TestWrapper })

		await waitFor(() => {
			expect(result.current.rooms).toStrictEqual([
				{
					name: 'Room 1',
					spots: 10,
					thumbnail: 'room1-url.com',
				},
				{
					name: 'Room 2',
					spots: 0,
					thumbnail: 'room2-url.com',
				},
				{
					name: 'Room 3',
					spots: 2,
					thumbnail: 'room3-url.com',
				},
			])
			expect(result.current.hasRooms).toBeTruthy()
		})
	})
})
