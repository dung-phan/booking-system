import { PropsWithChildren, useEffect } from 'react'
import { DefaultValues, FieldValues, FormProvider, ValidationMode, useForm } from 'react-hook-form'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Props = PropsWithChildren<{
	heading: string
	isOpen: boolean
	schema: yup.AnyObjectSchema
	onClose: () => void
	mode?: keyof ValidationMode
	defaultValues?: DefaultValues<FieldValues>
}>

export function FormModal({ heading, isOpen, children, onClose, mode, defaultValues, schema }: Props) {
	const formReturns = useForm({
		resolver: yupResolver(schema),
		defaultValues,
		mode,
	})

	useEffect(() => {
		if (isOpen) {
			formReturns.reset()
		}
	}, [formReturns, isOpen])

	return (
		<Modal size={['xs', null, 'sm', 'md', 'lg']} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{heading}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormProvider {...formReturns}>{children}</FormProvider>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
