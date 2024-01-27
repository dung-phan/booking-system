import { Container, Stack, Heading, Text, Progress } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
	title: string
	intro: string
	isLoading?: boolean
}>

export function PageLayout({ title, intro, isLoading, children }: Props) {
	return (
		<>
			{isLoading ? <Progress size="xs" bg="primary" isIndeterminate /> : <></>}
			<Container my={3} maxW="unset">
				<Stack direction="column" pb={10}>
					<Heading fontWeight={400}>{title}</Heading>
					<Text maxW={500} color="#9A9A9A">
						{intro}
					</Text>
				</Stack>
				{children}
			</Container>
		</>
	)
}
