import { RoomDetails } from '../types/room.type'
import { Room } from './room/room.component'

type Props = {
	rooms: RoomDetails[]
	onClickBook: (room: RoomDetails) => void
}

export function RoomList({ rooms, onClickBook }: Props) {
	return rooms.map(({ spots, name, thumbnail }) => (
		<Room spots={spots} name={name} thumbnail={thumbnail} key={name} onClickBook={onClickBook} />
	))
}
