import * as yup from 'yup'

export function getFormSchema(spots: number) {
	return yup.object({
		email: yup.string().email('Email must be a valid email').required('This field is required'),
		spots: yup
			.number()
			.required('This field is required')
			.positive('This is not a valid number')
			.transform((val, orig) => (orig === '' ? undefined : val))
			.test('is-spots-valid', `There are only ${spots} spots remaining`, (value) => value <= spots),
	})
}
