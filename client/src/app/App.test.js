import React from 'react'
import App from './App'
import { renderWithReduxThunkAndRouter } from '../utils/testHelpers'

test('renders app without crashing', () => {
  renderWithReduxThunkAndRouter(<App />)
})
