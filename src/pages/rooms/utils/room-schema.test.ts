import { getFormSchema } from './room-schema.util'

describe('getFormSchema', () => {
	const availableSpots = 10

	it('should validate the email input correctly', () => {
		const formSchema = getFormSchema(availableSpots)
		const result = formSchema.validateSync({ email: 'test@example.com', spots: 7 })

		expect(result).toEqual({ email: 'test@example.com', spots: 7 })
	})

	it('should require an email input', () => {
		const formSchema = getFormSchema(availableSpots)

		expect(() => formSchema.validateSync({ spots: 5, email: '' })).toThrow('This field is required')
	})

	it('should require a valid email input', () => {
		const formSchema = getFormSchema(availableSpots)

		expect(() => formSchema.validateSync({ email: 'invalid-email', spots: 5 })).toThrow(
			'Email must be a valid email',
		)
	})

	it('should validate the spots input correctly', () => {
		const formSchema = getFormSchema(availableSpots)
		const result = formSchema.validateSync({ email: 'test@example.com', spots: 2 })

		expect(result).toEqual({ email: 'test@example.com', spots: 2 })
	})

	it('should require a spots input', () => {
		const formSchema = getFormSchema(availableSpots)

		expect(() => formSchema.validateSync({ email: 'test@example.com', spots: '' })).toThrow(
			'This field is required',
		)
	})

	it('should require a positive spots value', () => {
		const formSchema = getFormSchema(availableSpots)

		expect(() => formSchema.validateSync({ email: 'test@example.com', spots: -10 })).toThrow(
			'This is not a valid number',
		)
	})

	it('should validate the spots input against the available spots', () => {
		const formSchema = getFormSchema(availableSpots)

		expect(() => formSchema.validateSync({ email: 'test@example.com', spots: 20 })).toThrow(
			`There are only ${availableSpots} spots remaining`,
		)
	})
})
