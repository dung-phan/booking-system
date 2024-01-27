import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RoomsPage } from './rooms.page'
import { TestWrapper } from '../../test/test-wrapper.component'

describe('RoomsPage', () => {
	it('renders a page title and introduction', () => {
		render(<RoomsPage />, { wrapper: TestWrapper })

		expect(screen.getByText('Rooms')).toBeInTheDocument()
		expect(screen.getByText(/Odio nisi, lectus dis nulla/)).toBeInTheDocument()
	})

	it('renders a list of rooms with details', async () => {
		render(<RoomsPage />, { wrapper: TestWrapper })

		expect(await screen.findAllByRole('img')).toHaveLength(3)
		expect(screen.getAllByRole('button', { name: 'Book!' })).toHaveLength(3)

		expect(screen.getByText('Room 1')).toBeInTheDocument()
		expect(screen.getByText('10 spots remaining')).toBeInTheDocument()

		expect(screen.getByText('Room 2')).toBeInTheDocument()
		expect(screen.getByText('0 spots remaining')).toBeInTheDocument()
	})

	it('shows a modal with inputs when clicking to book the seats', async () => {
		render(<RoomsPage />, { wrapper: TestWrapper })

		const bookButtonsList = await screen.findAllByRole('button', { name: 'Book!' })

		await userEvent.click(bookButtonsList[0])

		const dialog = screen.getByRole('dialog')
		expect(dialog).toBeInTheDocument()
		expect(screen.getByText('Room 1')).toBeInTheDocument()
	})

	it('blocks users from booking an empty room', async () => {
		render(<RoomsPage />, { wrapper: TestWrapper })

		const bookButtonsList = await screen.findAllByRole('button', { name: 'Book!' })

		expect(bookButtonsList[1]).toBeDisabled()
		await userEvent.click(bookButtonsList[1])

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
	})

	it('invalidates wrong inputs and disallows users to submit their booking', async () => {
		render(<RoomsPage />, { wrapper: TestWrapper })

		const bookButtonsList = await screen.findAllByRole('button', { name: 'Book!' })

		await userEvent.click(bookButtonsList[2])

		const spotsInput = screen.getByLabelText('Spots')
		await userEvent.type(screen.getByLabelText('Email'), 'test-mail@')
		await userEvent.type(spotsInput, '10')

		expect(screen.getByText('Email must be a valid email')).toBeInTheDocument()
		expect(screen.getByText('There are only 2 spots remaining')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled()

		await userEvent.clear(spotsInput)
		await userEvent.type(spotsInput, '-90')
		expect(screen.getByText('This is not a valid number')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled()
	})

	it('allows users to submit their booking if the inputs are valid', async () => {
		render(<RoomsPage />, { wrapper: TestWrapper })

		const bookButtonsList = await screen.findAllByRole('button', { name: 'Book!' })

		await userEvent.click(bookButtonsList[0])

		await userEvent.type(screen.getByLabelText('Email'), 'test-mail@example.com')
		expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled()

		await userEvent.type(screen.getByLabelText('Spots'), '4')

		expect(screen.getByRole('button', { name: 'Confirm' })).toBeEnabled()
	})
})
