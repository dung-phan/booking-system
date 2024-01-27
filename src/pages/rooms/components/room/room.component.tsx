import { Button, Card, CardBody, HStack } from '@chakra-ui/react'

import { RoomDetails } from '../../types/room.type'
import { RoomImage } from './room-image.component'
import { RoomInfo } from './room-info.component'

type Props = RoomDetails & {
	onClickBook: (room: RoomDetails) => void
}

export function Room({ name, spots, thumbnail, onClickBook }: Props) {
	return (
		<Card variant="unstyled">
			<CardBody>
				<RoomImage src={thumbnail} alt={`Room ${name} has ${spots} spots remaining`} />
				<HStack justifyContent="space-between" mt="2">
					<RoomInfo name={name} spots={spots} />
					<Button isDisabled={!spots} onClick={() => onClickBook({ name, spots, thumbnail })}>
						Book!
					</Button>
				</HStack>
			</CardBody>
		</Card>
	)
}
