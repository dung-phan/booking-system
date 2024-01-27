import { useState } from 'react'
import { AbsoluteCenter, Box, Grid, useDisclosure } from '@chakra-ui/react'

import { type RoomDetails } from './types/room.type'
import { useFetchRooms } from './hooks/use-fetch-rooms.hook'
import { PageLayout } from '../../components/page-layout.component'
import { RoomForm } from './components/room-form.component'
import { FormModal } from '../../components/form-modal.component'
import { getFormSchema } from './utils/room-schema.util'
import { RoomList } from './components/room-list.component'

export function RoomsPage() {
	const { hasRooms, rooms, isLoading } = useFetchRooms()
	const [selectedRoom, setSelectedRoom] = useState<RoomDetails | undefined>(undefined)
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleBookClick = (roomDetails: RoomDetails) => {
		setSelectedRoom(roomDetails)
		onOpen()
	}

	return (
		<PageLayout
			title="Rooms"
			intro="Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et."
			isLoading={isLoading}
		>
			{hasRooms ? (
				<Grid
					gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
					rowGap={[10]}
					columnGap={[null, null, 10]}
				>
					<RoomList rooms={rooms} onClickBook={handleBookClick} />
				</Grid>
			) : (
				<Box position="relative" h="200px">
					<AbsoluteCenter>There are currently no rooms available.</AbsoluteCenter>
				</Box>
			)}
			<FormModal
				schema={getFormSchema(selectedRoom?.spots as number)}
				defaultValues={{
					email: '',
					spots: undefined,
				}}
				mode="onChange"
				onClose={onClose}
				isOpen={isOpen}
				heading={`Room: ${selectedRoom?.name}`}
			>
				<RoomForm onSubmit={onClose} onCancel={onClose} />
			</FormModal>
		</PageLayout>
	)
}
