/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fireEvent, render, screen } from '@testing-library/react'
import GlobalFilter from './GlobalFilter'

describe('Table Filer', () => {
  const setup = () => { 
    let filter = ''
    const setFilter = () => {
      filter = 'ALO'
    }
    const utils = render(<GlobalFilter setFilter={setFilter} filter={filter} />)
    const input = utils.getByRole('textbox')
    return {
      input,
      ...utils,
    }
  }
  test('Textbox renders correctly', () => {
    render(<GlobalFilter />)
    const searchElement = screen.getByRole('textbox')
    expect(searchElement).toBeInTheDocument()
  })
  test('Textbox Onchange', () => {
    const { input } = setup()
    //@ts-ignore
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, { target: { value: 'Good Day' } })
    //@ts-ignore
    expect(input.value).toBe('') //empty after
  })
})
