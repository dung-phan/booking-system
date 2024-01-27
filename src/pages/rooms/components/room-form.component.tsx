import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react'
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form'

export type RoomFormProps = {
	onSubmit: SubmitHandler<FieldValues>
	onCancel: () => void
}

export function RoomForm({ onCancel, onSubmit }: RoomFormProps) {
	const {
		handleSubmit,
		formState: { isDirty, errors, isValid },
		register,
	} = useFormContext()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack direction="column" spacing={1}>
				<FormControl isInvalid={!!errors.email}>
					<FormLabel htmlFor="email">Email</FormLabel>
					<Input id="email" placeholder="Email" type="email" {...register('email')} />
					{errors.email ? <FormErrorMessage>{errors.email.message as string}</FormErrorMessage> : <></>}
				</FormControl>

				<FormControl isInvalid={!!errors.spots}>
					<FormLabel htmlFor="spots">Spots</FormLabel>
					<Input id="spots" placeholder="Spots" type="number" {...register('spots')} />
					{errors.spots ? <FormErrorMessage>{errors.spots.message as string}</FormErrorMessage> : <></>}
				</FormControl>

				<Stack direction="row" justifyContent="flex-end" spacing={2} my={4}>
					<Button type="submit" isDisabled={!isDirty || !isValid}>
						Confirm
					</Button>
					<Button variant="ghost" color="secondary" onClick={onCancel}>
						Cancel
					</Button>
				</Stack>
			</Stack>
		</form>
	)
}
