import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { checkToken } from '../../redux/thunks'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  dispatch(checkToken())
  const { signedIn } = useSelector((state) => state)
  return (
    <Route
      {...rest}
      render={() => (signedIn ? <Component /> : <Redirect to='/' />)}
    />
  )
}

export const SignInRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  dispatch(checkToken())
  const { signedIn } = useSelector((state) => state)
  return (
    <Route
      {...rest}
      render={() => (signedIn ? <Redirect to='/home' /> : <Component />)}
    />
  )
}
