import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import rootReducer from '../../redux/slices'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

export const renderWithReduxThunkAndRouter = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, applyMiddleware(thunk), initialState),
  } = {}
) => {
  const rendered = render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
    ({ initialState, store = createStore(rootReducer, initialState) } = {})
  )
  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithReduxAndRouter(ui, {
        container: rendered.container,
        ...options,
      }),
  }
}

export const renderWithReduxAndRouter = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  const rendered = render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
    ({ initialState, store = createStore(rootReducer, initialState) } = {})
  )
  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithReduxAndRouter(ui, {
        container: rendered.container,
        ...options,
      }),
  }
}

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  const rendered = render(
    <Provider store={store}>{ui}</Provider>,
    ({ initialState, store = createStore(rootReducer, initialState) } = {})
  )
  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithRedux(ui, { container: rendered.container, ...options }),
  }
}

export const renderWithRouter = ui => {
  const rendered = render(<BrowserRouter>{ui}</BrowserRouter>)
  return {
    ...rendered,
    rerender: ui => renderWithRouter(ui, { container: rendered.container }),
  }
}
