import { AspectRatio, Image } from '@chakra-ui/react'

type Props = {
	src: string
	alt: string
}

export function RoomImage({ src, alt }: Props) {
	return (
		<AspectRatio>
			<Image src={src} alt={alt} borderRadius="lg" />
		</AspectRatio>
	)
}
