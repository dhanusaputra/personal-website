import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'
import LangFilter from './LangFilter'

const mockLangs = [{ id : 'en' }, { id: 'id' }]

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}))

describe('<LangFilter />', () => {
  let component

  beforeEach(() => {
    useSelector.mockReturnValueOnce(mockLangs)
    component = render(
      <LangFilter />
    )
  })
  afterEach(() => {
    useSelector.mockClear()
  })

  test('renders some languages', () => {
    expect(component.container).toHaveTextContent('ID')
    expect(component.container).toHaveTextContent('EN')
  })
})
