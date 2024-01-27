import { FormProvider, useForm } from 'react-hook-form'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RoomForm, RoomFormProps } from './room-form.component'

describe('RoomForm', () => {
	const TestComponent = ({ onCancel, onSubmit }: RoomFormProps) => {
		const formReturns = useForm()

		return (
			<FormProvider {...formReturns}>
				<RoomForm onCancel={onCancel} onSubmit={(data) => onSubmit(data)} />
			</FormProvider>
		)
	}

	it('renders the form with room input fields and action buttons', () => {
		render(<TestComponent onCancel={vi.fn()} onSubmit={vi.fn()} />)

		expect(screen.getByLabelText('Email')).toBeInTheDocument()
		expect(screen.getByLabelText('Spots')).toBeInTheDocument()

		expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
	})

	it('calls the submit handler when the form is submitted', async () => {
		const mockSubmitHandler = vi.fn()
		render(<TestComponent onCancel={vi.fn()} onSubmit={mockSubmitHandler} />)

		await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
		await userEvent.type(screen.getByLabelText('Spots'), '3')
		await userEvent.click(screen.getByText('Confirm'))

		await waitFor(() => {
			expect(mockSubmitHandler).toHaveBeenCalledWith({
				email: 'test@example.com',
				spots: '3',
			})
		})
	})

	it('calls the cancel handler when the cancel button is clicked', async () => {
		const mockCancelHandler = vi.fn()
		const mockSubmitHandler = vi.fn()

		render(<TestComponent onCancel={mockCancelHandler} onSubmit={mockSubmitHandler} />)

		await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))

		expect(mockCancelHandler).toHaveBeenCalled()
		expect(mockSubmitHandler).not.toHaveBeenCalled()
	})
})
