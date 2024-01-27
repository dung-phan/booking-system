import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Room } from './room.component'

describe('Room Component', () => {
	const mockRoom = {
		name: 'Test Room',
		spots: 15,
		thumbnail: 'test-thumbnail.jpg',
	}

	it('renders the room details correctly', () => {
		render(<Room {...mockRoom} onClickBook={() => {}} />)

		expect(screen.getByText('Test Room')).toBeInTheDocument()
		expect(screen.getByText('15 spots remaining')).toBeInTheDocument()

		const image = screen.getByAltText('Room Test Room has 15 spots remaining') as HTMLImageElement
		expect(image).toBeInTheDocument()
		expect(image.src).toContain('test-thumbnail.jpg')
	})

	it('calls onClickBook when the "Book!" button is clicked', async () => {
		const onClickBookMock = vi.fn()
		render(<Room {...mockRoom} onClickBook={onClickBookMock} />)

		await userEvent.click(screen.getByRole('button', { name: 'Book!' }))

		expect(onClickBookMock).toHaveBeenCalledWith({
			name: 'Test Room',
			spots: 15,
			thumbnail: 'test-thumbnail.jpg',
		})
	})

	it('disables the "Book!" button when there are no spots remaining', () => {
		render(<Room name="No Spots Room" spots={0} thumbnail="test-thumbnail.jpg" onClickBook={() => {}} />)

		expect(screen.getByRole('button', { name: 'Book!' })).toBeDisabled()
	})
})
