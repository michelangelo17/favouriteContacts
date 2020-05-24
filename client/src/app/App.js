import React from 'react'
import SignIn from './components/signIn/SignIn'
import { PrivateRoute, SignInRoute } from '../utils/authRoutes'
import FriendsList from './components/friendsList/FriendsList'
import NewFriend from './components/newFriend/NewFriend'
import EmoGlobal from '../emotionalThings/EmoGlobal'
import Register from './components/register/register'

const App = () => {
  return (
    <>
      <EmoGlobal />
      <SignInRoute exact path='/' component={SignIn} />
      <SignInRoute path='/register' component={Register} />
      <PrivateRoute path='/home' component={FriendsList} />
      <PrivateRoute path='/signedout' component={SignIn} />
      <PrivateRoute path='/add-friend' component={NewFriend} />
    </>
  )
}
export default App
