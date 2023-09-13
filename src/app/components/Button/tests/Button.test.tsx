import React from 'react'
import {render, screen} from '@testing-library/react'
import Button from '..'
import userEvent from '@testing-library/user-event'


describe('Testing button click handler', () => {
  const clickMock = jest.fn(() => Promise.resolve())

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  it('renders', () => {
    const { container } = render(<Button onClick={clickMock} />)
    expect(container).not.toBe(null)
  })

  it('is clickable', () => {
    render(<Button onClick={clickMock} />)
    userEvent.click(screen.getByRole('button'))
    expect(clickMock).toBeCalledTimes(1)
  })
})