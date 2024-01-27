import { Stack, Text } from '@chakra-ui/react'

type Props = {
	name: string
	spots: number
}

export function RoomInfo({ name, spots }: Props) {
	return (
		<Stack>
			<Text fontWeight="bold">{name}</Text>
			<Text color="primary">{spots} spots remaining</Text>
		</Stack>
	)
}
