import { http, HttpResponse } from 'msw'

export const handlers = [
	http.get('*/rooms.json', () => {
		return HttpResponse.json({
			rooms: [
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
			],
		})
	}),
]
