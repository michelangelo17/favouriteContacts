import React from 'react'
import { renderWithReduxAndRouter } from '../../../utils/testHelpers'
import '@testing-library/jest-dom/extend-expect'
import SignIn from './SignIn'

test('renders component without crashing', () => {
  renderWithReduxAndRouter(<SignIn />)
})
