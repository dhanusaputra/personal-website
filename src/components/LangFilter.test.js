import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LangFilter from './LangFilter'

describe('<LangFilter />', () => {
  let component

  beforeEach(() => {
    component = render(
      <LangFilter />
    )
  })

  test('renders all language', () => {
    expect(component.container).toHaveTextContent('ID')
    expect(component.container).toHaveTextContent('EN')
  })
})
